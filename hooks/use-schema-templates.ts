import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";

export function useSchemaTemplates(generationType: "CLASSIFICATION" | "QUESTIONS") {
    const [schemas, setSchemas] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSchemas = async () => {
        const tokens = await TokenRepository.getTokens();
        if (!tokens) return;

        setIsLoading(true);
        setError(null);
        try {
            const schemaTemplatesApi = createApiClient().schemaTemplates;
            const data = await schemaTemplatesApi.schemaTemplatesGet({ generationType });
            setSchemas(data || []);
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to fetch schemas");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const activateSchema = async (schemaId: string) => {
        try {
            const schemaTemplatesApi = createApiClient().schemaTemplates;
            await schemaTemplatesApi.schemaTemplatesIdActivatePost({ id: schemaId });
            await fetchSchemas();
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to activate schema");
            }
            throw e;
        }
    };

    useEffect(() => {
        fetchSchemas();
    }, [generationType]);

    return {
        schemas,
        isLoading,
        error,
        refresh: fetchSchemas,
        activateSchema,
    };
}
