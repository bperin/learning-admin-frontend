"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersUser } from "@/generated";
import { useAuthStore } from "@/lib/auth-store";

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    user: UsersUser | null;
    setUser: (user: UsersUser | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Use Zustand store for auth state
    const { isAuthenticated, user, logout: authStoreLogout, initialize } = useAuthStore();

    useEffect(() => {
        const initAuth = async () => {
            try {
                await initialize();
            } catch (e) {
                console.error("[AuthProvider] Failed to init auth:", e);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, [initialize]);

    const logout = () => {
        authStoreLogout();
        router.push("/login");
    };

    // Dummy setters to maintain interface compatibility
    const setIsAuthenticated = () => {};
    const setUser = () => {};

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                isLoading,
                setIsLoading,
                user,
                setUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}
