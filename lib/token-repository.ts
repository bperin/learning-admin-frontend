import { UsersUser } from "@/generated";

const ACCESS_TOKEN_KEY = "learning_access_token";
const REFRESH_TOKEN_KEY = "learning_refresh_token";
const USER_KEY = "learning_user";

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export const TokenRepository = {
    saveTokens(tokens: Tokens): void {
        if (typeof window === "undefined") return;
        localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    },

    getTokens(): Tokens | null {
        if (typeof window === "undefined") return null;
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        if (accessToken && refreshToken) {
            return { accessToken, refreshToken };
        }
        return null;
    },

    clearTokens(): void {
        if (typeof window === "undefined") return;
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    saveUser(user: UsersUser): void {
        if (typeof window === "undefined") return;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    getUser(): UsersUser | null {
        if (typeof window === "undefined") return null;
        const userJson = localStorage.getItem(USER_KEY);
        if (userJson) {
            return JSON.parse(userJson);
        }
        return null;
    },
};
