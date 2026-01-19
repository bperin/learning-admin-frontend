"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersUser } from "@/generated";
import { TokenRepository } from "@/lib/token-repository";

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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<UsersUser | null>(null);
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            try {
                const tokens = await TokenRepository.getTokens();
                const savedUser = await TokenRepository.getUser();

                if (tokens && savedUser) {
                    setIsAuthenticated(true);
                    setUser(savedUser);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (e) {
                console.error("[AuthProvider] Failed to init auth:", e);
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const logout = () => {
        TokenRepository.clearTokens();
        localStorage.removeItem("auth_token");
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
        setUser(null);
        router.push("/login");
    };

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
