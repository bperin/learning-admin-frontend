import { create } from "zustand";
import { TokenRepository } from "@/lib/token-repository";

export interface AuthState {
    token: string | null;
    user: { id: string; email: string; role: string } | null;
    isAuthenticated: boolean;
    setAuthData: (token: string, user: { id: string; email: string; role: string }) => void;
    logout: () => void;
    initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    token: null,
    user: null,
    isAuthenticated: false,
    setAuthData: (token: string, user: { id: string; email: string; role: string }) => {
        set({ token, user, isAuthenticated: true });
    },
    logout: () => {
        TokenRepository.clearTokens();
        set({ token: null, user: null, isAuthenticated: false });
    },
    initialize: async () => {
        try {
            const tokens = await TokenRepository.getTokens();
            const user = await TokenRepository.getUser();

            if (tokens && user) {
                set({
                    token: tokens.accessToken,
                    user,
                    isAuthenticated: true,
                });
            } else {
                set({
                    token: null,
                    user: null,
                    isAuthenticated: false,
                });
            }
        } catch (error) {
            console.error("Failed to initialize auth:", error);
            set({
                token: null,
                user: null,
                isAuthenticated: false,
            });
        }
    },
}));
