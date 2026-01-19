"use client";

import { createApiClient } from "@/lib/api-client";
import { useState } from "react";

export function useEvals() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const listEvals = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.evals.evalsGet();
            return response;
        } catch (e: any) {
            console.error("[useEvals] Failed to fetch evals:", e);
            setError(e.message || "Failed to fetch evals");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const getEvalById = async (id: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.evals.evalsIdGet({ id });
            return response;
        } catch (e: any) {
            console.error("[useEvals] Failed to fetch eval:", e);
            setError(e.message || "Failed to fetch eval");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        listEvals,
        getEvalById,
    };
}
