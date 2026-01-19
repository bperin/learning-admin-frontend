"use client";

import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { PromptTemplatesPromptTemplate } from "@/generated/models/PromptTemplatesPromptTemplate";
import { SchemaTemplatesSchemaTemplate } from "@/generated/models/SchemaTemplatesSchemaTemplate";
import { SystemInstructionsSystemInstruction } from "@/generated/models/SystemInstructionsSystemInstruction";
import { ChunkingConfigsChunkingConfig } from "@/generated/models/ChunkingConfigsChunkingConfig";
import { ModelConfigsModelConfig } from "@/generated/models/ModelConfigsModelConfig";
import TemplateCard from "@/components/prompt-schemas/template-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

export default function PromptSchemasPage() {
    const [classificationPrompt, setClassificationPrompt] = useState<PromptTemplatesPromptTemplate | null>(null);
    const [classificationSchema, setClassificationSchema] = useState<SchemaTemplatesSchemaTemplate | null>(null);
    const [generationPrompt, setGenerationPrompt] = useState<PromptTemplatesPromptTemplate | null>(null);
    const [generationSchema, setGenerationSchema] = useState<SchemaTemplatesSchemaTemplate | null>(null);
    const [systemInstructions, setSystemInstructions] = useState<SystemInstructionsSystemInstruction | null>(null);
    const [chunkingConfig, setChunkingConfig] = useState<ChunkingConfigsChunkingConfig | null>(null);
    const [modelConfig, setModelConfig] = useState<ModelConfigsModelConfig | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const apiClient = createApiClient();

                const [classifPrompt, classifSchema, genPrompt, genSchema, sysInstructions, chunking, model] = await Promise.all([apiClient.promptTemplates.promptTemplatesGenerationTypeGenerationTypeGet({ generationType: "CLASSIFICATION" }).catch(() => null), apiClient.schemaTemplates.schemaTemplatesGenerationTypeGenerationTypeGet({ generationType: "CLASSIFICATION" }).catch(() => null), apiClient.promptTemplates.promptTemplatesGenerationTypeGenerationTypeGet({ generationType: "QUESTIONS" }).catch(() => null), apiClient.schemaTemplates.schemaTemplatesGenerationTypeGenerationTypeGet({ generationType: "QUESTIONS" }).catch(() => null), apiClient.systemInstructions.systemInstructionsActiveGet().catch(() => null), apiClient.chunkingConfigs.chunkingConfigsActiveGet().catch(() => null), apiClient.modelConfigs.modelConfigsActiveGet().catch(() => null)]);

                setClassificationPrompt(classifPrompt);
                setClassificationSchema(classifSchema);
                setGenerationPrompt(genPrompt);
                setGenerationSchema(genSchema);
                setSystemInstructions(sysInstructions);
                setChunkingConfig(chunking);
                setModelConfig(model);
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
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold mb-2">Prompt & Schemas</h1>
                <p className="text-gray-400 mb-8">Manage templates, schemas, and system configurations</p>

                <Tabs defaultValue="classification" className="w-full">
                    <TabsList className="grid w-full max-w-4xl grid-cols-5 bg-gray-900 border border-gray-800">
                        <TabsTrigger value="classification" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                            Classification
                        </TabsTrigger>
                        <TabsTrigger value="generation" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                            Generation
                        </TabsTrigger>
                        <TabsTrigger value="model-config" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                            Model Config
                        </TabsTrigger>
                        <TabsTrigger value="chunking" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                            Chunking
                        </TabsTrigger>
                        <TabsTrigger value="system" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
                            System
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="classification" className="mt-8">
                        <div className="grid grid-cols-2 gap-6">
                            <TemplateCard title="Prompt Template" type="prompt" template={classificationPrompt} generationType="CLASSIFICATION" />
                            <TemplateCard title="Schema Template" type="schema" template={classificationSchema} generationType="CLASSIFICATION" />
                        </div>
                    </TabsContent>

                    <TabsContent value="generation" className="mt-8">
                        <div className="grid grid-cols-2 gap-6">
                            <TemplateCard title="Prompt Template" type="prompt" template={generationPrompt} generationType="GENERATION" />
                            <TemplateCard title="Schema Template" type="schema" template={generationSchema} generationType="GENERATION" />
                        </div>
                    </TabsContent>

                    <TabsContent value="model-config" className="mt-8">
                        <TemplateCard title="Model Configuration" type="system" template={modelConfig} generationType="MODEL" />
                    </TabsContent>

                    <TabsContent value="chunking" className="mt-8">
                        <TemplateCard title="Chunking Config" type="chunking" template={chunkingConfig} generationType="CHUNKING" />
                    </TabsContent>

                    <TabsContent value="system" className="mt-8">
                        <TemplateCard title="System Instructions" type="system" template={systemInstructions} generationType="SYSTEM" />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
