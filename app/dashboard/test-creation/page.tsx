"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubjectSelection } from "@/components/test-creation/subject-selection";
import { BookSelection } from "@/components/test-creation/book-selection";
import { TestCreationSummary } from "@/components/test-creation/test-creation-summary";
import { SubjectsSubjectForSelection, ContentDiscoveryBookWithSubject } from "@/generated";

type TestCreationStep = "subjects" | "books" | "summary";

export default function TestCreationPage() {
    const [currentStep, setCurrentStep] = useState<TestCreationStep>("subjects");
    const [selectedSubjects, setSelectedSubjects] = useState<SubjectsSubjectForSelection[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<ContentDiscoveryBookWithSubject[]>([]);

    const handleSubjectsSelected = (subjects: SubjectsSubjectForSelection[]) => {
        setSelectedSubjects(subjects);
        setCurrentStep("books");
    };

    const handleBooksSelected = (books: ContentDiscoveryBookWithSubject[]) => {
        setSelectedBooks(books);
        setCurrentStep("summary");
    };

    const handleBack = () => {
        if (currentStep === "books") {
            setCurrentStep("subjects");
        } else if (currentStep === "summary") {
            setCurrentStep("books");
        }
    };

    const handleReset = () => {
        setCurrentStep("subjects");
        setSelectedSubjects([]);
        setSelectedBooks([]);
    };

    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Create New Test</h1>
                <Button variant="outline" onClick={handleReset}>
                    Start Over
                </Button>
            </div>

            {/* Progress Indicator */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                        <Badge variant={currentStep === "subjects" ? "default" : "secondary"}>1. Select Subjects</Badge>
                        <div className="h-px bg-border flex-1" />
                        <Badge variant={currentStep === "books" ? "default" : "secondary"}>2. Choose Books</Badge>
                        <div className="h-px bg-border flex-1" />
                        <Badge variant={currentStep === "summary" ? "default" : "secondary"}>3. Review & Create</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Step Content */}
            <Tabs value={currentStep} className="space-y-6">
                <TabsContent value="subjects" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 1: Select Subject Areas</CardTitle>
                            <p className="text-muted-foreground">Choose one or more subject areas to source content from. Selected subjects will be used to find relevant books and materials.</p>
                        </CardHeader>
                        <CardContent>
                            <SubjectSelection selectedSubjects={selectedSubjects} onSubjectsSelected={handleSubjectsSelected} />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="books" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Step 2: Select Books</CardTitle>
                                    <p className="text-muted-foreground">Choose specific books from the selected subjects. These will be used to generate test questions.</p>
                                </div>
                                <Button variant="outline" onClick={handleBack}>
                                    Back to Subjects
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <BookSelection selectedSubjects={selectedSubjects} selectedBooks={selectedBooks} onBooksSelected={handleBooksSelected} />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="summary" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Step 3: Review & Create Test</CardTitle>
                                    <p className="text-muted-foreground">Review your selections and create the test.</p>
                                </div>
                                <Button variant="outline" onClick={handleBack}>
                                    Back to Books
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <TestCreationSummary selectedSubjects={selectedSubjects} selectedBooks={selectedBooks} onReset={handleReset} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
