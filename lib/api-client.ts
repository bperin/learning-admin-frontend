import { AuthApi, UsersApi, EvalsApi, AttemptsApi, ReviewsApi, Configuration } from "@/generated";
import { TokenRepository } from "@/lib/token-repository";
import { jwtDecode, JwtPayload } from "jwt-decode";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

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
            .then((response) => {
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
            .catch((error) => {
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

const getValidAccessToken = (): string | null => {
    const tokens = TokenRepository.getTokens();
    if (!tokens?.accessToken) return null;

    if (!isTokenExpired(tokens.accessToken)) {
        return tokens.accessToken;
    }

    if (!tokens.refreshToken) return null;

    refreshAccessToken(tokens.refreshToken);
    return null;
};

const createApiConfig = () =>
    new Configuration({
        basePath: API_BASE_URL,
        accessToken: async () => {
            const token = getValidAccessToken();
            return token || "";
        },
    });

export const createApiClient = () => ({
    auth: new AuthApi(createApiConfig()),
    users: new UsersApi(createApiConfig()),
    evals: new EvalsApi(createApiConfig()),
    attempts: new AttemptsApi(createApiConfig()),
    reviews: new ReviewsApi(createApiConfig()),
});
