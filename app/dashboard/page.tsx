"use client";

import { useEffect, useState } from "react";

export default function SubjectsPage() {
    const [subjects, setSubjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSubjects = async () => {
            try {
                setIsLoading(true);
                // TODO: Replace with actual API endpoint when subjects endpoint is available
                // For now, showing empty state
                setSubjects([]);
            } catch (err: any) {
                setError(err.message || "Failed to load subjects");
            } finally {
                setIsLoading(false);
            }
        };

        loadSubjects();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading subjects...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-red-400">Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Subjects</h1>

            {subjects.length === 0 ? (
                <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
                    <p className="text-gray-400">No subjects found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject: any) => (
                        <div key={subject.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-2">{subject.name}</h3>
                            {subject.description && <p className="text-gray-400 text-sm mb-4">{subject.description}</p>}
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>ID: {subject.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
