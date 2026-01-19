"use client";

import { useState } from "react";
import { useSchemaTemplates } from "@/hooks/use-schema-templates";
import SchemaDisplay from "@/components/display/schema-display";
import ActivateDeactivateButton from "@/components/display/activate-deactivate-button";

export default function ClassificationSchemas() {
    const { schemas, isLoading, error, activateSchema } = useSchemaTemplates("CLASSIFICATION");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleActivate = async (schemaId: string) => {
        try {
            await activateSchema(schemaId);
        } catch (err: any) {
            console.error("Failed to activate schema:", err);
        }
    };

    const handleDeactivate = async (schemaId: string) => {
        // Note: API doesn't have deactivate endpoint, only activate
        console.log("Deactivate not available via API for schema:", schemaId);
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
                <p className="text-gray-400 text-sm mb-4">Classification schemas are immutable. You can create new versions or activate previous versions, but cannot modify existing ones.</p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Create New Version</button>
            </div>

            {schemas.length === 0 ? (
                <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-700">
                    <p className="text-gray-400">No classification schemas found</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {schemas.map((schema: any) => (
                        <div key={schema.id} className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                            {/* Summary */}
                            <button onClick={() => setExpandedId(expandedId === schema.id ? null : schema.id)} className="w-full px-4 py-4 hover:bg-gray-800 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold">{schema.name}</h3>
                                        <p className="text-gray-400 text-sm mt-1">Version: {schema.version}</p>
                                    </div>
                                    <div className="text-gray-400">{expandedId === schema.id ? "▼" : "▶"}</div>
                                </div>
                            </button>

                            {/* Expanded Content */}
                            {expandedId === schema.id && (
                                <div className="border-t border-gray-700 p-4 space-y-4">
                                    <SchemaDisplay content={schema.content || schema} title="Schema Content" version={schema.version} />

                                    <div className="flex gap-3">
                                        <ActivateDeactivateButton isActive={schema.isActive} onActivate={() => handleActivate(schema.id)} onDeactivate={() => handleDeactivate(schema.id)} />
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
