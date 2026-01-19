"use client";

import { createApiClient } from "@/lib/api-client";
import { UsersUser } from "@/generated";
import { useState } from "react";

export function useUsers() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getCurrentUser = async (): Promise<UsersUser | null> => {
        setIsLoading(true);
        setError(null);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.users.usersIdGet({ id: "me" });
            return response;
        } catch (e: any) {
            console.error("[useUsers] Failed to fetch current user:", e);
            setError(e.message || "Failed to fetch user");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const getUserById = async (id: string): Promise<UsersUser | null> => {
        setIsLoading(true);
        setError(null);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.users.usersIdGet({ id });
            return response;
        } catch (e: any) {
            console.error("[useUsers] Failed to fetch user:", e);
            setError(e.message || "Failed to fetch user");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const getUserByEmail = async (email: string): Promise<UsersUser | null> => {
        setIsLoading(true);
        setError(null);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.users.usersEmailEmailGet({ email });
            return response;
        } catch (e: any) {
            console.error("[useUsers] Failed to fetch user by email:", e);
            setError(e.message || "Failed to fetch user");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        getCurrentUser,
        getUserById,
        getUserByEmail,
    };
}
