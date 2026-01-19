"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TemplateCardProps {
    title: string;
    type: "prompt" | "schema" | "chunking" | "system";
    template: any;
    generationType: string;
}

export default function TemplateCard({ title, type, template, generationType }: TemplateCardProps) {
    const [expanded, setExpanded] = useState(true);

    if (!template) {
        return (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-500 text-sm">No active template</p>
            </div>
        );
    }

    const isActive = template.active || template.is_active;
    const id = template.id || "N/A";
    const version = template.version || "1";
    const createdAt = template.created_at || template.createdAt;
    const content = template.content || template.schema || template.config || template.prompt || template.schema_json || template.template || template.text || template;
    const description = template.description || "";
    const title_field = template.title || template.name || "";

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    {isActive && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-900/30 border border-green-700 rounded text-green-400 text-xs font-medium">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Active
                        </span>
                    )}
                </div>

                <div className="mb-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-400">ID:</span>
                        <span className="text-gray-300 font-mono text-xs">{id}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Version:</span>
                        <span className="text-gray-300">{version}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Active:</span>
                        <span className="text-gray-300">{isActive ? "Yes" : "No"}</span>
                    </div>
                    {createdAt && (
                        <div className="flex justify-between">
                            <span className="text-gray-400">Created:</span>
                            <span className="text-gray-300">{typeof createdAt === "string" ? new Date(createdAt).toLocaleDateString() : createdAt}</span>
                        </div>
                    )}
                    {title_field && (
                        <div className="flex justify-between">
                            <span className="text-gray-400">Title:</span>
                            <span className="text-gray-300">{title_field}</span>
                        </div>
                    )}
                    {description && (
                        <div className="mt-3 pt-3 border-t border-gray-700">
                            <p className="text-gray-300 text-xs">{description}</p>
                        </div>
                    )}
                </div>

                <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    <span>{expanded ? "Hide" : "Show"} Content</span>
                    {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {content && (
                    <div className="mt-4 p-4 bg-gray-800 rounded border border-gray-700 max-h-96 overflow-auto">
                        <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words font-mono">{typeof content === "string" ? content : JSON.stringify(content, null, 2)}</pre>
                    </div>
                )}
            </div>

            <div className="px-6 py-3 bg-gray-800/50 border-t border-gray-800">
                <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">View All Versions →</button>
            </div>
        </div>
    );
}
