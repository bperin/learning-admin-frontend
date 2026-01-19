"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Zap, Loader } from "lucide-react";

interface GeneratedQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    status: "generated" | "approved" | "rejected";
}

export function QuestionGenerationTab() {
    const [subject, setSubject] = useState("");
    const [curriculum, setCurriculum] = useState("");
    const [questionCount, setQuestionCount] = useState("5");
    const [isGenerating, setIsGenerating] = useState(false);
    const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);

    const handleGenerate = async () => {
        if (!subject || !curriculum) {
            alert("Please fill in all fields");
            return;
        }

        setIsGenerating(true);
        setQuestions([]);

        // Simulate generation
        setTimeout(() => {
            const mockQuestions: GeneratedQuestion[] = [
                {
                    id: "1",
                    question: "What is the capital of France?",
                    options: ["London", "Paris", "Berlin", "Madrid"],
                    correctAnswer: "Paris",
                    status: "generated",
                },
                {
                    id: "2",
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correctAnswer: "Mars",
                    status: "generated",
                },
                {
                    id: "3",
                    question: "What is 15 × 12?",
                    options: ["160", "170", "180", "190"],
                    correctAnswer: "180",
                    status: "generated",
                },
            ];
            setQuestions(mockQuestions);
            setIsGenerating(false);
        }, 2000);
    };

    const handleApprove = (id: string) => {
        setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, status: "approved" } : q)));
    };

    const handleReject = (id: string) => {
        setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, status: "rejected" } : q)));
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Generate Questions</CardTitle>
                    <CardDescription>Generate questions based on taxonomy and curriculum</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input id="subject" placeholder="e.g., Mathematics" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={isGenerating} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="curriculum" className="text-sm font-medium">
                                    Curriculum
                                </label>
                                <Input id="curriculum" placeholder="e.g., Grade 10" value={curriculum} onChange={(e) => setCurriculum(e.target.value)} disabled={isGenerating} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="count" className="text-sm font-medium">
                                Number of Questions
                            </label>
                            <Input id="count" type="number" min="1" max="50" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)} disabled={isGenerating} />
                        </div>
                        <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
                            {isGenerating ? (
                                <>
                                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Zap className="w-4 h-4 mr-2" />
                                    Generate Questions
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {questions.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Generated Questions</CardTitle>
                        <CardDescription>Review and approve generated questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {questions.map((q, idx) => (
                                <div key={q.id} className="border rounded-lg p-4 space-y-3">
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground mb-2">Question {idx + 1}</p>
                                        <p className="font-medium">{q.question}</p>
                                    </div>
                                    <div className="space-y-2">
                                        {q.options.map((option, optIdx) => (
                                            <div key={optIdx} className={`p-2 rounded border text-sm ${option === q.correctAnswer ? "bg-green-50 border-green-200" : "bg-gray-50"}`}>
                                                {String.fromCharCode(65 + optIdx)}) {option}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" variant={q.status === "approved" ? "default" : "outline"} onClick={() => handleApprove(q.id)} disabled={q.status === "rejected"}>
                                            Approve
                                        </Button>
                                        <Button size="sm" variant={q.status === "rejected" ? "destructive" : "outline"} onClick={() => handleReject(q.id)} disabled={q.status === "approved"}>
                                            Reject
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
