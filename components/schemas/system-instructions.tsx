"use client";

import { useState } from "react";
import { useSystemInstructions } from "@/hooks/use-system-instructions";
import PromptDisplay from "@/components/display/prompt-display";
import ActivateDeactivateButton from "@/components/display/activate-deactivate-button";

export default function SystemInstructions() {
    const { instructions, isLoading, error, activateInstruction } = useSystemInstructions();
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleActivate = async (instructionId: string) => {
        try {
            await activateInstruction(instructionId);
        } catch (err: any) {
            console.error("Failed to activate instruction:", err);
        }
    };

    const handleDeactivate = async (instructionId: string) => {
        // Note: API doesn't have deactivate endpoint, only activate
        console.log("Deactivate not available via API for instruction:", instructionId);
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
                <p className="text-gray-400 text-sm mb-4">System instructions are immutable guidelines for the system. You can create new versions or activate previous ones, but cannot modify existing ones.</p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Create New Version</button>
            </div>

            {instructions.length === 0 ? (
                <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-700">
                    <p className="text-gray-400">No system instructions found</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {instructions.map((instruction: any) => (
                        <div key={instruction.id} className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                            {/* Summary */}
                            <button onClick={() => setExpandedId(expandedId === instruction.id ? null : instruction.id)} className="w-full px-4 py-4 hover:bg-gray-800 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold">{instruction.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">Version: {instruction.version}</p>
                                    </div>
                                    <div className="text-gray-400">{expandedId === instruction.id ? "▼" : "▶"}</div>
                                </div>
                            </button>

                            {/* Expanded Content */}
                            {expandedId === instruction.id && (
                                <div className="border-t border-gray-700 p-4 space-y-4">
                                    <PromptDisplay content={instruction.content || instruction.instructions || ""} title="Instructions" version={instruction.version} />

                                    <div className="flex gap-3">
                                        <ActivateDeactivateButton isActive={instruction.isActive} onActivate={() => handleActivate(instruction.id)} onDeactivate={() => handleDeactivate(instruction.id)} />
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
