import { useState, useEffect } from "react";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";

export function useSubjects() {
    const [subjects, setSubjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSubjects = async () => {
        const tokens = await TokenRepository.getTokens();
        if (!tokens) return;

        setIsLoading(true);
        setError(null);
        try {
            // TODO: Replace with actual subjects API when available
            // const subjectsApi = createApiClient().subjects;
            // const data = await subjectsApi.subjectsGet();
            setSubjects([]);
        } catch (e: any) {
            if (e.status !== 401) {
                setError(e.message || "Failed to fetch subjects");
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return {
        subjects,
        isLoading,
        error,
        refresh: fetchSubjects,
    };
}
