"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface SchemaDisplayProps {
    content: Record<string, any> | string;
    title?: string;
    version?: string;
}

export default function SchemaDisplay({ content, title, version }: SchemaDisplayProps) {
    const [copied, setCopied] = useState(false);

    const jsonString = typeof content === "string" ? content : JSON.stringify(content, null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div>
                    {title && <h3 className="text-white font-semibold">{title}</h3>}
                    {version && <p className="text-gray-400 text-xs mt-1">Version: {version}</p>}
                </div>
                <button onClick={handleCopy} className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-400 hover:text-gray-200" title="Copy to clipboard">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>

            {/* JSON Block */}
            <pre className="p-4 overflow-x-auto text-sm text-gray-300 font-mono bg-gray-950 max-h-96">
                <code>{jsonString}</code>
            </pre>
        </div>
    );
}
