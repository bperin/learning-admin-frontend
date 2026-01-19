import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";

export function useSystemInstructions() {
    const [instructions, setInstructions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchInstructions = async () => {
        const tokens = await TokenRepository.getTokens();
        if (!tokens) return;

        setIsLoading(true);
        setError(null);
        try {
            const systemInstructionsApi = createApiClient().systemInstructions;
            const data = await systemInstructionsApi.systemInstructionsGet();
            setInstructions(data || []);
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to fetch system instructions");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const activateInstruction = async (instructionId: string) => {
        try {
            const systemInstructionsApi = createApiClient().systemInstructions;
            await systemInstructionsApi.systemInstructionsIdActivatePost({ id: instructionId });
            await fetchInstructions();
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to activate instruction");
            }
            throw e;
        }
    };

    useEffect(() => {
        fetchInstructions();
    }, []);

    return {
        instructions,
        isLoading,
        error,
        refresh: fetchInstructions,
        activateInstruction,
    };
}
