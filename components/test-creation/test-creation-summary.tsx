"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubjectsSubjectForSelection, ContentDiscoveryBookWithSubject } from "@/generated";

interface TestCreationSummaryProps {
    selectedSubjects: SubjectsSubjectForSelection[];
    selectedBooks: ContentDiscoveryBookWithSubject[];
    onReset: () => void;
}

export function TestCreationSummary({ selectedSubjects, selectedBooks, onReset }: TestCreationSummaryProps) {
    const handleCreateTest = () => {
        // TODO: Implement test creation logic
        console.log("Creating test with:", {
            subjects: selectedSubjects,
            books: selectedBooks,
        });

        // For now, just show an alert
        alert(`Test creation initiated with ${selectedBooks.length} books from ${selectedSubjects.length} subjects!`);
    };

    return (
        <div className="space-y-6">
            {/* Summary Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Selected Subjects */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Selected Subjects
                            <Badge variant="secondary">{selectedSubjects.length}</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {selectedSubjects.map((subject) => (
                                <div key={subject.id} className="p-3 bg-muted rounded-lg">
                                    <p className="font-medium text-sm">{subject.displayName}</p>
                                    <p className="text-xs text-muted-foreground">{subject.fullName}</p>
                                    {subject.parentId && (
                                        <Badge variant="outline" className="mt-1 text-xs">
                                            Sub-category
                                        </Badge>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Selected Books */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Selected Books
                            <Badge variant="secondary">{selectedBooks.length}</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {selectedBooks.map((book, index) => (
                                <div key={`${book.url}-${index}`} className="p-3 bg-muted rounded-lg">
                                    <p className="font-medium text-sm line-clamp-2">{book.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{book.subjectName}</p>
                                    {book.authors && <p className="text-xs text-muted-foreground">By: {book.authors}</p>}
                                    <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block">
                                        View Book →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Test Configuration */}
            <Card>
                <CardHeader>
                    <CardTitle>Test Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Question Count</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option value={10}>10 questions</option>
                                <option value={20}>20 questions</option>
                                <option value={30}>30 questions</option>
                                <option value={50}>50 questions</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Difficulty Level</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="mixed">Mixed</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Question Types</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option value="multiple-choice">Multiple Choice</option>
                                <option value="short-answer">Short Answer</option>
                                <option value="essay">Essay</option>
                                <option value="mixed">Mixed Types</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold text-primary">{selectedSubjects.length}</p>
                            <p className="text-sm text-muted-foreground">Subjects</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{selectedBooks.length}</p>
                            <p className="text-sm text-muted-foreground">Books</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">~10</p>
                            <p className="text-sm text-muted-foreground">Questions</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">~5min</p>
                            <p className="text-sm text-muted-foreground">Est. Time</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
                <Button variant="outline" onClick={onReset}>
                    Start Over
                </Button>

                <div className="space-x-3">
                    <Button variant="outline">Save as Draft</Button>
                    <Button onClick={handleCreateTest} className="min-w-32">
                        Create Test
                    </Button>
                </div>
            </div>
        </div>
    );
}
