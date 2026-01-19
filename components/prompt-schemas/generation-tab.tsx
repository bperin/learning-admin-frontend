"use client";

import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { PromptTemplatesPromptTemplate } from "@/generated/models/PromptTemplatesPromptTemplate";
import { SchemaTemplatesSchemaTemplate } from "@/generated/models/SchemaTemplatesSchemaTemplate";
import { SystemInstructionsSystemInstruction } from "@/generated/models/SystemInstructionsSystemInstruction";
import TemplateCard from "./template-card";
import { Loader2 } from "lucide-react";

export default function GenerationTab() {
    const [promptTemplate, setPromptTemplate] = useState<PromptTemplatesPromptTemplate | null>(null);
    const [schemaTemplate, setSchemaTemplate] = useState<SchemaTemplatesSchemaTemplate | null>(null);
    const [systemInstructions, setSystemInstructions] = useState<SystemInstructionsSystemInstruction | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const apiClient = createApiClient();

                const [prompt, schema, instructions] = await Promise.all([
                    apiClient.promptTemplates
                        .promptTemplatesGenerationTypeGenerationTypeGet({
                            generationType: "GENERATION",
                        })
                        .catch(() => null),
                    apiClient.schemaTemplates
                        .schemaTemplatesGenerationTypeGenerationTypeGet({
                            generationType: "GENERATION",
                        })
                        .catch(() => null),
                    apiClient.systemInstructions.systemInstructionsActiveGet().catch(() => null),
                ]);

                setPromptTemplate(prompt);
                setSchemaTemplate(schema);
                setSystemInstructions(instructions);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load configuration");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-6">
            <TemplateCard title="Prompt Template" type="prompt" template={promptTemplate} generationType="GENERATION" />
            <TemplateCard title="Schema Template" type="schema" template={schemaTemplate} generationType="GENERATION" />
            <TemplateCard title="System Instructions" type="system" template={systemInstructions} generationType="GENERATION" />
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Model Config</h3>
                <p className="text-gray-400 text-sm">Model configuration coming soon</p>
            </div>
        </div>
    );
}
