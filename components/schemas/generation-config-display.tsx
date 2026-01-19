"use client";

import { useEffect } from "react";
import { useGenerationConfig } from "@/hooks/use-generation-config";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GENERATION_TYPES = ["CLASSIFICATION", "GENERATION"];

export function GenerationConfigDisplay() {
    const { configs, loading, error, fetchAllConfigs } = useGenerationConfig();

    useEffect(() => {
        fetchAllConfigs(GENERATION_TYPES);
    }, [fetchAllConfigs]);

    if (loading) {
        return <div className="p-4">Loading generation configs...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="space-y-6">
            {GENERATION_TYPES.map((type) => {
                const config = configs[type];
                if (!config) return null;

                return (
                    <Card key={type} className="p-6 border border-gray-700 bg-gray-900">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">{type}</h3>
                            <Badge variant="outline" className="text-xs">
                                {config.schema && config.prompt ? "✓ Complete" : "⚠ Incomplete"}
                            </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Schema Section */}
                            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                                <h4 className="font-medium text-gray-300 mb-3">Schema Template</h4>
                                {config.schema ? (
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="text-gray-400">ID:</span>
                                            <span className="text-gray-200 ml-2">{config.schema.id}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Version:</span>
                                            <span className="text-gray-200 ml-2">{config.schema.version}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Active:</span>
                                            <Badge variant={config.schema.isActive ? "default" : "secondary"} className="ml-2">
                                                {config.schema.isActive ? "Yes" : "No"}
                                            </Badge>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Created:</span>
                                            <span className="text-gray-200 ml-2">{config.schema.createdAt && new Date(config.schema.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        {config.schema.schemaJson && (
                                            <div className="mt-3 p-2 bg-gray-900 rounded text-xs max-h-32 overflow-auto">
                                                <pre className="text-gray-300">{JSON.stringify(config.schema.schemaJson, null, 2)}</pre>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-gray-400 text-sm">No schema template configured</div>
                                )}
                            </div>

                            {/* Prompt Section */}
                            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                                <h4 className="font-medium text-gray-300 mb-3">Prompt Template</h4>
                                {config.prompt ? (
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="text-gray-400">Title:</span>
                                            <span className="text-gray-200 ml-2">{config.prompt.title}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Version:</span>
                                            <span className="text-gray-200 ml-2">{config.prompt.version}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Active:</span>
                                            <Badge variant={config.prompt.isActive ? "default" : "secondary"} className="ml-2">
                                                {config.prompt.isActive ? "Yes" : "No"}
                                            </Badge>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">Created:</span>
                                            <span className="text-gray-200 ml-2">{config.prompt.createdAt && new Date(config.prompt.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        {config.prompt.description && (
                                            <div className="mt-2">
                                                <span className="text-gray-400 text-xs">Description:</span>
                                                <p className="text-gray-300 text-xs mt-1">{config.prompt.description}</p>
                                            </div>
                                        )}
                                        {config.prompt.template && (
                                            <div className="mt-3 p-2 bg-gray-900 rounded text-xs max-h-32 overflow-auto">
                                                <pre className="text-gray-300 whitespace-pre-wrap break-words">{config.prompt.template}</pre>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-gray-400 text-sm">No prompt template configured</div>
                                )}
                            </div>
                        </div>

                        {config.error && <div className="mt-4 p-3 bg-red-900/20 border border-red-700 rounded text-red-300 text-sm">Error: {config.error}</div>}
                    </Card>
                );
            })}
        </div>
    );
}
