import { useState, useCallback } from "react";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";
import { SchemaTemplatesSchemaTemplate } from "@/generated/models/SchemaTemplatesSchemaTemplate";
import { PromptTemplatesPromptTemplate } from "@/generated/models/PromptTemplatesPromptTemplate";

const apiClient = createApiClient();

export interface GenerationConfig {
    generationType: string;
    schema: SchemaTemplatesSchemaTemplate | null;
    prompt: PromptTemplatesPromptTemplate | null;
    loading: boolean;
    error: string | null;
}

export interface GenerationConfigState {
    configs: Record<string, GenerationConfig>;
    loading: boolean;
    error: string | null;
}

export function useGenerationConfig() {
    const [state, setState] = useState<GenerationConfigState>({
        configs: {},
        loading: false,
        error: null,
    });

    const fetchConfigForType = useCallback(async (generationType: string) => {
        setState((prev) => ({
            ...prev,
            configs: {
                ...prev.configs,
                [generationType]: {
                    generationType,
                    schema: null,
                    prompt: null,
                    loading: true,
                    error: null,
                },
            },
        }));

        try {
            const tokens = await TokenRepository.getTokens();
            if (!tokens) {
                throw new Error("Not authenticated");
            }

            const [schema, prompt] = await Promise.all([
                apiClient.schemaTemplates
                    .schemaTemplatesGenerationTypeGenerationTypeGet({
                        generationType,
                    })
                    .catch(() => null),
                apiClient.promptTemplates
                    .promptTemplatesGenerationTypeGenerationTypeGet({
                        generationType,
                    })
                    .catch(() => null),
            ]);

            setState((prev) => ({
                ...prev,
                configs: {
                    ...prev.configs,
                    [generationType]: {
                        generationType,
                        schema,
                        prompt,
                        loading: false,
                        error: null,
                    },
                },
            }));
        } catch (err) {
            const error = err instanceof Error ? err.message : "Failed to fetch config";
            setState((prev) => ({
                ...prev,
                configs: {
                    ...prev.configs,
                    [generationType]: {
                        generationType,
                        schema: null,
                        prompt: null,
                        loading: false,
                        error,
                    },
                },
            }));
        }
    }, []);

    const fetchAllConfigs = useCallback(async (generationTypes: string[]) => {
        setState((prev) => ({
            ...prev,
            loading: true,
            error: null,
        }));

        try {
            const tokens = await TokenRepository.getTokens();
            if (!tokens) {
                throw new Error("Not authenticated");
            }

            const configs: Record<string, GenerationConfig> = {};

            for (const type of generationTypes) {
                try {
                    const [schema, prompt] = await Promise.all([
                        apiClient.schemaTemplates
                            .schemaTemplatesGenerationTypeGenerationTypeGet({
                                generationType: type,
                            })
                            .catch(() => null),
                        apiClient.promptTemplates
                            .promptTemplatesGenerationTypeGenerationTypeGet({
                                generationType: type,
                            })
                            .catch(() => null),
                    ]);

                    configs[type] = {
                        generationType: type,
                        schema,
                        prompt,
                        loading: false,
                        error: null,
                    };
                } catch (err) {
                    const error = err instanceof Error ? err.message : "Failed to fetch";
                    configs[type] = {
                        generationType: type,
                        schema: null,
                        prompt: null,
                        loading: false,
                        error,
                    };
                }
            }

            setState({
                configs,
                loading: false,
                error: null,
            });
        } catch (err) {
            const error = err instanceof Error ? err.message : "Failed to fetch configs";
            setState((prev) => ({
                ...prev,
                loading: false,
                error,
            }));
        }
    }, []);

    return {
        ...state,
        fetchConfigForType,
        fetchAllConfigs,
    };
}
