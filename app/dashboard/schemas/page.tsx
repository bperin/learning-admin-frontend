"use client";

import { useState } from "react";
import ClassificationSchemas from "@/components/schemas/classification-schemas";
import GenerationSchemas from "@/components/schemas/generation-schemas";
import ChunkingConfig from "@/components/schemas/chunking-config";
import SystemInstructions from "@/components/schemas/system-instructions";
import { GenerationConfigDisplay } from "@/components/schemas/generation-config-display";

export default function SchemasPage() {
    const [activeTab, setActiveTab] = useState("config");

    const tabs = [
        { id: "config", label: "Config Overview", component: GenerationConfigDisplay },
        { id: "classification", label: "Classification", component: ClassificationSchemas },
        { id: "generation", label: "Generation", component: GenerationSchemas },
        { id: "chunking", label: "Chunking Config", component: ChunkingConfig },
        { id: "instructions", label: "System Instructions", component: SystemInstructions },
    ];

    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    const ActiveComponent = activeTabData?.component;

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Schemas</h1>

            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                {/* Tab List */}
                <div className="bg-gray-900 border-b border-gray-700 flex">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === tab.id ? "text-blue-400 border-blue-400" : "text-gray-400 border-transparent hover:text-gray-300"}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">{ActiveComponent && <ActiveComponent />}</div>
            </div>
        </div>
    );
}
