"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { UsersUser } from "@/generated";
import { TokenRepository } from "@/lib/token-repository";

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    user: UsersUser | null;
    setUser: (user: UsersUser | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<UsersUser | null>(null);

    useEffect(() => {
        const initAuth = () => {
            const tokens = TokenRepository.getTokens();
            const savedUser = TokenRepository.getUser();

            if (tokens && savedUser) {
                setIsAuthenticated(true);
                setUser(savedUser);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
            setIsLoading(false);
        };

        initAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                isLoading,
                setIsLoading,
                user,
                setUser,
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
