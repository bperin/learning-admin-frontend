import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";

export function useChunkingConfigs() {
    const [configs, setConfigs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchConfigs = async () => {
        const tokens = await TokenRepository.getTokens();
        if (!tokens) return;

        setIsLoading(true);
        setError(null);
        try {
            const chunkingConfigsApi = createApiClient().chunkingConfigs;
            const data = await chunkingConfigsApi.chunkingConfigsGet();
            setConfigs(data || []);
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to fetch chunking configs");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const activateConfig = async (configId: string) => {
        try {
            const chunkingConfigsApi = createApiClient().chunkingConfigs;
            await chunkingConfigsApi.chunkingConfigsIdActivatePost({ id: configId });
            await fetchConfigs();
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to activate config");
            }
            throw e;
        }
    };

    useEffect(() => {
        fetchConfigs();
    }, []);

    return {
        configs,
        isLoading,
        error,
        refresh: fetchConfigs,
        activateConfig,
    };
}
