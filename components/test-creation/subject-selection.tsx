"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SubjectsSubjectForSelection } from "@/generated";
import { useSubjectSelection } from "@/hooks/use-subject-selection";

interface SubjectSelectionProps {
    selectedSubjects: SubjectsSubjectForSelection[];
    onSubjectsSelected: (subjects: SubjectsSubjectForSelection[]) => void;
}

export function SubjectSelection({ selectedSubjects, onSubjectsSelected }: SubjectSelectionProps) {
    const { availableSubjects, loading, error, refetch } = useSubjectSelection();
    const [localSelectedSubjects, setLocalSelectedSubjects] = useState<SubjectsSubjectForSelection[]>(selectedSubjects);

    const toggleSubject = (subject: SubjectsSubjectForSelection) => {
        const isSelected = localSelectedSubjects.some((s) => s.id === subject.id);

        if (isSelected) {
            setLocalSelectedSubjects((prev) => prev.filter((s) => s.id !== subject.id));
        } else {
            setLocalSelectedSubjects((prev) => [...prev, subject]);
        }
    };

    const handleContinue = () => {
        if (localSelectedSubjects.length > 0) {
            onSubjectsSelected(localSelectedSubjects);
        }
    };

    const isSelected = (subject: SubjectsSubjectForSelection) => {
        return localSelectedSubjects.some((s) => s.id === subject.id);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground">Loading subjects...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 space-y-4">
                <p className="text-destructive">{error}</p>
                <Button onClick={refetch} variant="outline">
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Subject Tag Cloud */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Available Subjects</h3>
                    <p className="text-sm text-muted-foreground">{localSelectedSubjects.length} selected</p>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-wrap gap-2">
                            {availableSubjects.map((subject) => (
                                <Badge key={subject.id} variant={isSelected(subject) ? "default" : "outline"} className="cursor-pointer hover:bg-primary/80 transition-colors px-3 py-2 text-sm" onClick={() => toggleSubject(subject)}>
                                    {subject.displayName}
                                    {subject.parentId && <span className="ml-1 text-xs opacity-70">(sub-category)</span>}
                                </Badge>
                            ))}
                        </div>

                        {availableSubjects.length === 0 && <p className="text-muted-foreground text-center py-8">No subjects available</p>}
                    </CardContent>
                </Card>
            </div>

            {/* Selected Subjects Summary */}
            {localSelectedSubjects.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Selected Subjects</h3>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-2">
                                {localSelectedSubjects.map((subject) => (
                                    <div key={subject.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <p className="font-medium">{subject.displayName}</p>
                                            <p className="text-sm text-muted-foreground">{subject.fullName}</p>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => toggleSubject(subject)}>
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Continue Button */}
            <div className="flex justify-end pt-4">
                <Button onClick={handleContinue} disabled={localSelectedSubjects.length === 0} className="min-w-40" size="lg">
                    Search for Content ({localSelectedSubjects.length} selected)
                </Button>
            </div>
        </div>
    );
}
