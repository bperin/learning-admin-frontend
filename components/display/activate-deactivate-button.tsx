"use client";

import { useState } from "react";
import { CheckCircle, Circle, Loader } from "lucide-react";

interface ActivateDeactivateButtonProps {
    isActive: boolean;
    onActivate: () => Promise<void>;
    onDeactivate: () => Promise<void>;
    disabled?: boolean;
}

export default function ActivateDeactivateButton({ isActive, onActivate, onDeactivate, disabled = false }: ActivateDeactivateButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleToggle = async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (isActive) {
                await onDeactivate();
            } else {
                await onActivate();
            }
        } catch (err: any) {
            setError(err.message || "Failed to update status");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <button onClick={handleToggle} disabled={disabled || isLoading} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? "bg-green-900/30 text-green-400 hover:bg-green-900/50 border border-green-700" : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"} disabled:opacity-50 disabled:cursor-not-allowed`}>
                {isLoading ? <Loader className="w-4 h-4 animate-spin" /> : isActive ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                {isLoading ? "Updating..." : isActive ? "Active" : "Inactive"}
            </button>

            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
}
