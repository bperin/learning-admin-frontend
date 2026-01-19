import { useState } from "react";
import { ContentDiscoveryApi, ContentDiscoveryBookListRequest, ContentDiscoveryBookListResponse, ContentDiscoveryBookWithSubject } from "@/generated";
import { apiClient } from "@/lib/api-client";

export function useContentDiscovery() {
    const [books, setBooks] = useState<ContentDiscoveryBookWithSubject[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = async (request: ContentDiscoveryBookListRequest) => {
        try {
            setLoading(true);
            setError(null);

            const contentDiscoveryApi = new ContentDiscoveryApi(apiClient);
            const response: ContentDiscoveryBookListResponse = await contentDiscoveryApi.contentDiscoveryBooksPost({
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
