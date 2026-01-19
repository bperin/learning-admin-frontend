import { create } from "zustand";
import { TokenRepository } from "@/lib/token-repository";

export interface AuthState {
    token: string | null;
    user: { id: string; email: string; role: string } | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: typeof window !== "undefined" ? localStorage.getItem("learning_access_token") : null,
    user: null,
    isAuthenticated: false,
    login: async (email: string, _password: string) => {
        // Placeholder - will be replaced with actual API call
        const mockToken = "mock-jwt-token-" + Date.now();
        TokenRepository.saveTokens({
            accessToken: mockToken,
            refreshToken: "mock-refresh-token-" + Date.now(),
        });
        set({
            token: mockToken,
            user: { id: "1", email, role: "admin" },
            isAuthenticated: true,
        });
    },
    logout: () => {
        TokenRepository.clearTokens();
        localStorage.removeItem("auth_token");
        localStorage.removeItem("access_token");
        set({ token: null, user: null, isAuthenticated: false });
    },
    setToken: (token: string) => {
        localStorage.setItem("learning_access_token", token);
        set({ token, isAuthenticated: true });
    },
}));
