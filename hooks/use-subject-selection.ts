import { useState, useEffect } from "react";
import { SubjectsSubjectForSelection } from "@/generated";
import { createApiClient } from "@/lib/api-client";

export function useSubjectSelection() {
    const [availableSubjects, setAvailableSubjects] = useState<SubjectsSubjectForSelection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSubjects = async () => {
        try {
            setLoading(true);
            setError(null);

            console.log("[useSubjectSelection] Fetching subjects from /subjects/for-selection");
            const client = createApiClient();
            const subjects = await client.subjects.subjectsForSelectionGet();

            console.log("[useSubjectSelection] Successfully fetched subjects:", subjects);
            setAvailableSubjects(subjects);
        } catch (err: any) {
            console.error("[useSubjectSelection] Failed to fetch subjects:", err);
            console.error("[useSubjectSelection] Error details:", {
                message: err.message,
                status: err.status,
                response: err.response,
            });
            setError(`Failed to load subjects: ${err.message || "Unknown error"}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return {
        availableSubjects,
        loading,
        error,
        refetch: fetchSubjects,
    };
}
