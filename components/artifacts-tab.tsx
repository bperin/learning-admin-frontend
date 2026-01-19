"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download } from "lucide-react";

interface Artifact {
    id: string;
    type: "generation" | "evaluation" | "classification";
    status: "ai_generated" | "approved" | "rejected";
    createdAt: string;
    metadata: {
        subject?: string;
        curriculum?: string;
        questionCount?: number;
        documentName?: string;
    };
}

export function ArtifactsTab() {
    const [artifacts] = useState<Artifact[]>([
        {
            id: "1",
            type: "generation",
            status: "ai_generated",
            createdAt: "2024-01-18 10:30 AM",
            metadata: {
                subject: "Mathematics",
                curriculum: "Grade 10",
                questionCount: 5,
            },
        },
        {
            id: "2",
            type: "classification",
            status: "approved",
            createdAt: "2024-01-18 09:15 AM",
            metadata: {
                documentName: "algebra_basics.pdf",
                subject: "Mathematics",
            },
        },
        {
            id: "3",
            type: "generation",
            status: "rejected",
            createdAt: "2024-01-17 03:45 PM",
            metadata: {
                subject: "Science",
                curriculum: "Grade 9",
                questionCount: 3,
            },
        },
    ]);

    const getStatusColor = (status: Artifact["status"]) => {
        switch (status) {
            case "ai_generated":
                return "bg-blue-100 text-blue-800";
            case "approved":
                return "bg-green-100 text-green-800";
            case "rejected":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getTypeLabel = (type: Artifact["type"]) => {
        switch (type) {
            case "generation":
                return "Question Generation";
            case "evaluation":
                return "Evaluation";
            case "classification":
                return "Classification";
            default:
                return type;
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Generation Artifacts</CardTitle>
                    <CardDescription>View and manage AI-generated artifacts and their review status</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {artifacts.map((artifact) => (
                            <div key={artifact.id} className="border rounded-lg p-4 flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <p className="font-medium">{getTypeLabel(artifact.type)}</p>
                                        <Badge className={getStatusColor(artifact.status)}>{artifact.status.replace("_", " ")}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{artifact.createdAt}</p>
                                    <div className="text-sm space-y-1">
                                        {artifact.metadata.subject && (
                                            <p>
                                                <span className="font-medium">Subject:</span> {artifact.metadata.subject}
                                            </p>
                                        )}
                                        {artifact.metadata.curriculum && (
                                            <p>
                                                <span className="font-medium">Curriculum:</span> {artifact.metadata.curriculum}
                                            </p>
                                        )}
                                        {artifact.metadata.questionCount && (
                                            <p>
                                                <span className="font-medium">Questions:</span> {artifact.metadata.questionCount}
                                            </p>
                                        )}
                                        {artifact.metadata.documentName && (
                                            <p>
                                                <span className="font-medium">Document:</span> {artifact.metadata.documentName}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <Button size="sm" variant="outline">
                                        <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
