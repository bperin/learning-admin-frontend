import { UsersUser } from "@/generated";

const ACCESS_TOKEN_KEY = "learning_access_token";
const REFRESH_TOKEN_KEY = "learning_refresh_token";
const USER_KEY = "learning_user";

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export const TokenRepository = {
    async saveTokens(tokens: Tokens): Promise<void> {
        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
            localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);

            // Verify tokens were actually saved
            const saved = localStorage.getItem(ACCESS_TOKEN_KEY);
            if (!saved) {
                throw new Error("Failed to persist access token to localStorage");
            }
        } catch (error) {
            console.error("[TokenRepository] Failed to save tokens:", error);
            throw new Error("Authentication failed: Unable to save tokens. Check localStorage permissions.");
        }
    },

    async getTokens(): Promise<Tokens | null> {
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

    async saveUser(user: UsersUser): Promise<void> {
        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(USER_KEY, JSON.stringify(user));

            // Verify user was actually saved
            const saved = localStorage.getItem(USER_KEY);
            if (!saved) {
                throw new Error("Failed to persist user to localStorage");
            }
        } catch (error) {
            console.error("[TokenRepository] Failed to save user:", error);
            throw new Error("Failed to save user profile. Check localStorage permissions.");
        }
    },

    async getUser(): Promise<UsersUser | null> {
        if (typeof window === "undefined") return null;
        const userJson = localStorage.getItem(USER_KEY);
        if (userJson) {
            return JSON.parse(userJson);
        }
        return null;
    },
};
