"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SubjectsSubjectForSelection, ContentDiscoveryBookWithSubject } from "@/generated";
import { useBooks } from "@/hooks/use-books";

interface BookSelectionProps {
    selectedSubjects: SubjectsSubjectForSelection[];
    selectedBooks: ContentDiscoveryBookWithSubject[];
    onBooksSelected: (books: ContentDiscoveryBookWithSubject[]) => void;
}

export function BookSelection({ selectedSubjects, selectedBooks, onBooksSelected }: BookSelectionProps) {
    const { books, loading, error, fetchBooks } = useBooks();
    const [localSelectedBooks, setLocalSelectedBooks] = useState<ContentDiscoveryBookWithSubject[]>(selectedBooks);
    const [maxBooks, setMaxBooks] = useState(10);

    useEffect(() => {
        if (selectedSubjects.length > 0) {
            handleFetchBooks();
        }
    }, [selectedSubjects]);

    const handleFetchBooks = async () => {
        try {
            await fetchBooks({
                subjectIds: selectedSubjects.map((s) => s.id).filter((id) => id !== undefined) as string[],
                maxBooks: maxBooks,
            });
        } catch (err) {
            // Error handled by hook
        }
    };

    const toggleBook = (book: ContentDiscoveryBookWithSubject) => {
        const isSelected = localSelectedBooks.some((b) => b.url === book.url);

        if (isSelected) {
            setLocalSelectedBooks((prev) => prev.filter((b) => b.url !== book.url));
        } else {
            setLocalSelectedBooks((prev) => [...prev, book]);
        }
    };

    const handleContinue = () => {
        if (localSelectedBooks.length > 0) {
            onBooksSelected(localSelectedBooks);
        }
    };

    const isSelected = (book: ContentDiscoveryBookWithSubject) => {
        return localSelectedBooks.some((b) => b.url === book.url);
    };

    const handleMaxBooksChange = (newMax: number) => {
        setMaxBooks(newMax);
        if (selectedSubjects.length > 0) {
            handleFetchBooks();
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground">Loading books...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 space-y-4">
                <p className="text-destructive">{error}</p>
                <Button onClick={handleFetchBooks} variant="outline">
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Available Books</h3>
                    <p className="text-sm text-muted-foreground">
                        Found {books.length} books from {selectedSubjects.length} subjects
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium">Max books:</label>
                        <select value={maxBooks} onChange={(e) => handleMaxBooksChange(Number(e.target.value))} className="border rounded px-2 py-1 text-sm">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    <Badge variant="secondary">{localSelectedBooks.length} selected</Badge>
                </div>
            </div>

            {/* Books List */}
            <div className="grid gap-4">
                {books.map((book, index) => (
                    <Card key={`${book.url}-${index}`} className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="pt-4">
                            <div className="flex items-start space-x-3">
                                <Checkbox checked={isSelected(book)} onCheckedChange={() => toggleBook(book)} className="mt-1" />

                                <div className="flex-1 space-y-2">
                                    <div>
                                        <h4 className="font-medium text-base leading-tight">{book.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">From: {book.subjectName}</p>
                                    </div>

                                    {book.description && <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>}

                                    {book.authors && <p className="text-xs text-muted-foreground">Authors: {book.authors}</p>}

                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="text-xs">
                                            {book.subjectName}
                                        </Badge>

                                        <div className="flex gap-2">
                                            {book.pdfLink && (
                                                <a href={book.pdfLink} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline font-medium" onClick={(e) => e.stopPropagation()}>
                                                    📄 PDF
                                                </a>
                                            )}
                                            <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
                                                View Book →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {books.length === 0 && (
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">No books found for the selected subjects.</p>
                            <Button onClick={handleFetchBooks} variant="outline" className="mt-4">
                                Refresh
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Selected Books Summary */}
            {localSelectedBooks.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Selected Books ({localSelectedBooks.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {localSelectedBooks.map((book, index) => (
                                <div key={`selected-${book.url}-${index}`} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{book.title}</p>
                                        <p className="text-xs text-muted-foreground">{book.subjectName}</p>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => toggleBook(book)}>
                                        Remove
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Continue Button */}
            <div className="flex justify-end">
                <Button onClick={handleContinue} disabled={localSelectedBooks.length === 0} className="min-w-32">
                    Continue to Summary ({localSelectedBooks.length})
                </Button>
            </div>
        </div>
    );
}
