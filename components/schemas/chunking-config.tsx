"use client";

import { useEffect, useState } from "react";
import { ChunkingConfigsApi, Configuration } from "@/generated";
import SchemaDisplay from "@/components/display/schema-display";
import ActivateDeactivateButton from "@/components/display/activate-deactivate-button";

export default function ChunkingConfig() {
    const [configs, setConfigs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const loadConfigs = async () => {
            try {
                setIsLoading(true);
                const config = new Configuration({
                    basePath: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
                    accessToken: localStorage.getItem("access_token") || undefined,
                });
                const api = new ChunkingConfigsApi(config);
                const response = await api.chunkingConfigsGet();
                setConfigs(response || []);
            } catch (err: any) {
                setError(err.message || "Failed to load configs");
            } finally {
                setIsLoading(false);
            }
        };

        loadConfigs();
    }, []);

    const handleActivate = async (configId: string) => {
        try {
            const config = new Configuration({
                basePath: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
                accessToken: localStorage.getItem("access_token") || undefined,
            });
            const api = new ChunkingConfigsApi(config);
            await api.chunkingConfigsIdActivatePost({ id: configId });
            // Reload configs after activation
            const response = await api.chunkingConfigsGet();
            setConfigs(response || []);
        } catch (err: any) {
            setError(err.message || "Failed to activate config");
        }
    };

    const handleDeactivate = async (configId: string) => {
        // Note: API doesn't have deactivate endpoint, only activate
        console.log("Deactivate not available via API for config:", configId);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <p className="text-gray-400 text-sm mb-4">Chunking configuration defines how documents are split into chunks for processing. This is immutable - create new versions or activate previous ones.</p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Create New Version</button>
            </div>

            {configs.length === 0 ? (
                <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-700">
                    <p className="text-gray-400">No chunking configuration found</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {configs.map((config: any) => (
                        <div key={config.id} className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                            {/* Summary */}
                            <button onClick={() => setExpandedId(expandedId === config.id ? null : config.id)} className="w-full px-4 py-4 hover:bg-gray-800 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold">{config.name}</h3>
                                        <p className="text-gray-400 text-sm mt-1">Version: {config.version}</p>
                                    </div>
                                    <div className="text-gray-400">{expandedId === config.id ? "▼" : "▶"}</div>
                                </div>
                            </button>

                            {/* Expanded Content */}
                            {expandedId === config.id && (
                                <div className="border-t border-gray-700 p-4 space-y-4">
                                    <SchemaDisplay content={config.content || config} title="Configuration" version={config.version} />

                                    <div className="flex gap-3">
                                        <ActivateDeactivateButton isActive={config.isActive} onActivate={() => handleActivate(config.id)} onDeactivate={() => handleDeactivate(config.id)} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
