import { AuthApi, UsersApi, EvalsApi, AttemptsApi, ReviewsApi, PromptTemplatesApi, SchemaTemplatesApi, ChunkingConfigsApi, SystemInstructionsApi, SubjectsApi, ModelConfigsApi, ContentDiscoveryApi, Configuration } from "@/generated";
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
    return payload.exp <= nowInSeconds + 60;
};

const refreshAccessToken = async (refreshToken: string): Promise<string | null> => {
    if (!refreshPromise) {
        const refreshApi = new AuthApi(
            new Configuration({
                basePath: API_BASE_URL,
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
                    await TokenRepository.saveTokens({
                        accessToken: response.accessToken,
                        refreshToken: response.refreshToken,
                    });
                    return response.accessToken;
                }
                await TokenRepository.clearTokens();
                return null;
            })
            .catch(async (error) => {
                console.error("[api-client] Token refresh failed", error);
                await TokenRepository.clearTokens();
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
    if (!tokens?.accessToken) {
        return null;
    }

    if (!isTokenExpired(tokens.accessToken)) {
        return tokens.accessToken;
    }

    if (!tokens.refreshToken) return null;

    return refreshAccessToken(tokens.refreshToken);
};

const configuration = new Configuration({
    basePath: API_BASE_URL,
    accessToken: async () => {
        const token = await getValidAccessToken();
        return token ? `Bearer ${token}` : "";
    },
});

export const authApi = new AuthApi(configuration);
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
const contentDiscoveryApi = new ContentDiscoveryApi(configuration);

export const createApiClient = () => ({
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
    contentDiscovery: contentDiscoveryApi,
});
