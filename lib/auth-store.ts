import { create } from "zustand";

export interface AuthState {
    token: string | null;
    user: { id: string; email: string; role: string } | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: typeof window !== "undefined" ? localStorage.getItem("auth_token") : null,
    user: null,
    isAuthenticated: false,
    login: async (email: string, _password: string) => {
        // Placeholder - will be replaced with actual API call
        const mockToken = "mock-jwt-token-" + Date.now();
        localStorage.setItem("auth_token", mockToken);
        set({
            token: mockToken,
            user: { id: "1", email, role: "admin" },
            isAuthenticated: true,
        });
    },
    logout: () => {
        localStorage.removeItem("auth_token");
        set({ token: null, user: null, isAuthenticated: false });
    },
    setToken: (token: string) => {
        localStorage.setItem("auth_token", token);
        set({ token, isAuthenticated: true });
    },
}));
