import { useState } from "react";
import { ContentDiscoveryBookListRequest, ContentDiscoveryBookListResponse, ContentDiscoveryBookWithSubject } from "@/generated";
import { createApiClient } from "@/lib/api-client";

export function useBooks() {
    const [books, setBooks] = useState<ContentDiscoveryBookWithSubject[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = async (request: ContentDiscoveryBookListRequest) => {
        try {
            setLoading(true);
            setError(null);

            const apiClient = createApiClient();
            const response: ContentDiscoveryBookListResponse = await apiClient.contentDiscovery.contentDiscoveryBooksPost({
                contentDiscoveryBookListRequest: request,
            });

            setBooks(response.books || []);
            return response;
        } catch (err) {
            console.error("Failed to fetch books:", err);
            setError("Failed to load books. Please try again.");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const clearBooks = () => {
        setBooks([]);
        setError(null);
    };

    return {
        books,
        loading,
        error,
        fetchBooks,
        clearBooks,
    };
}
