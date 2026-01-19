import { AuthApi, UsersApi, EvalsApi, AttemptsApi, ReviewsApi, PromptTemplatesApi, SchemaTemplatesApi, ChunkingConfigsApi, SystemInstructionsApi, SubjectsApi, ModelConfigsApi, Configuration, Middleware, ResponseContext, RequestContext } from "@/generated";
import { TokenRepository } from "@/lib/token-repository";
import { jwtDecode, JwtPayload } from "jwt-decode";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

let refreshPromise: Promise<string | null> | null = null;

const decodeJwtPayload = (token: string) => {
    try {
        return jwtDecode<JwtPayload>(token);
    } catch (error) {
        console.warn("[api-client] Failed to decode token payload", error);
        return null;
    }
};

const isTokenExpired = (token: string) => {
    const payload = decodeJwtPayload(token);
    if (!payload?.exp) return false;

    const nowInSeconds = Math.floor(Date.now() / 1000);
    return payload.exp <= nowInSeconds + 60; // Refresh 1 minute before expiration
};

const refreshAccessToken = async (refreshToken: string): Promise<string | null> => {
    if (!refreshPromise) {
        const refreshApi = new AuthApi(
            new Configuration({
                basePath: API_BASE_URL,
                middleware: [loggingMiddleware],
            })
        );

        refreshPromise = refreshApi
            .oauthTokenPost({
                authdtoTokenRequest: {
                    grantType: "refresh_token",
                    refreshToken,
                },
            })
            .then(async (response) => {
                if (response.accessToken && response.refreshToken) {
                    TokenRepository.saveTokens({
                        accessToken: response.accessToken,
                        refreshToken: response.refreshToken,
                    });
                    return response.accessToken;
                }
                TokenRepository.clearTokens();
                return null;
            })
            .catch(async (error) => {
                console.error("[api-client] Token refresh failed", error);
                TokenRepository.clearTokens();
                return null;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }

    return refreshPromise;
};

const getValidAccessToken = async (): Promise<string | null> => {
    const tokens = await TokenRepository.getTokens();
    if (!tokens?.accessToken) return null;

    if (!isTokenExpired(tokens.accessToken)) {
        return tokens.accessToken;
    }

    if (!tokens.refreshToken) return null;

    return refreshAccessToken(tokens.refreshToken);
};

const authMiddleware: Middleware = {
    pre: async (context: RequestContext) => {
        const token = await getValidAccessToken();
        console.log(`[Auth Middleware] Token retrieved:`, token ? "✓ Present" : "✗ Missing");

        if (token) {
            if (!context.init.headers) {
                context.init.headers = {};
            }
            const headers = context.init.headers as Record<string, string>;
            headers["Authorization"] = `Bearer ${token}`;
            console.log(`[Auth Middleware] ✓ Bearer token attached`);
        } else {
            console.warn(`[Auth Middleware] ✗ No token available`);
        }
        return context;
    },
};

const loggingMiddleware: Middleware = {
    pre: async (context: RequestContext) => {
        console.log(`[API Request] ${context.init.method} ${context.url}`);
        if (context.init.headers) {
            console.log(`[API Request Headers]`, context.init.headers);
        }
        if (context.init.body) {
            console.log(`[API Request Body]`, context.init.body);
        }
        return context;
    },
    post: async (context: ResponseContext) => {
        console.log(`[API Response] ${context.response.status} ${context.url}`);
        return context.response;
    },
};

const configuration = new Configuration({
    basePath: API_BASE_URL,
    middleware: [authMiddleware, loggingMiddleware],
});

const authApi = new AuthApi(configuration);
const usersApi = new UsersApi(configuration);
const evalsApi = new EvalsApi(configuration);
const attemptsApi = new AttemptsApi(configuration);
const reviewsApi = new ReviewsApi(configuration);
const promptTemplatesApi = new PromptTemplatesApi(configuration);
const schemaTemplatesApi = new SchemaTemplatesApi(configuration);
const chunkingConfigsApi = new ChunkingConfigsApi(configuration);
const systemInstructionsApi = new SystemInstructionsApi(configuration);
const subjectsApi = new SubjectsApi(configuration);
const modelConfigsApi = new ModelConfigsApi(configuration);

export const apiClient = {
    auth: authApi,
    users: usersApi,
    evals: evalsApi,
    attempts: attemptsApi,
    reviews: reviewsApi,
    promptTemplates: promptTemplatesApi,
    schemaTemplates: schemaTemplatesApi,
    chunkingConfigs: chunkingConfigsApi,
    systemInstructions: systemInstructionsApi,
    subjects: subjectsApi,
    modelConfigs: modelConfigsApi,
};

export const createApiClient = () => apiClient;
