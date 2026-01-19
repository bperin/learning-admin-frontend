"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface ClassificationStatus {
    id: string;
    name: string;
    status: "pending" | "classifying" | "completed" | "error";
    subject?: string;
    curriculum?: string;
    progress?: number;
}

export function DocumentsTab() {
    const [documents, setDocuments] = useState<ClassificationStatus[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(Array.from(e.target.files));
        }
    };

    const handleFiles = (files: File[]) => {
        setIsUploading(true);
        files.forEach((file) => {
            const newDoc: ClassificationStatus = {
                id: Date.now().toString() + Math.random(),
                name: file.name,
                status: "pending",
                progress: 0,
            };
            setDocuments((prev) => [newDoc, ...prev]);

            // Simulate upload and classification
            setTimeout(() => {
                setDocuments((prev) => prev.map((doc) => (doc.id === newDoc.id ? { ...doc, status: "classifying", progress: 30 } : doc)));
            }, 500);

            setTimeout(() => {
                setDocuments((prev) =>
                    prev.map((doc) =>
                        doc.id === newDoc.id
                            ? {
                                  ...doc,
                                  status: "classifying",
                                  progress: 70,
                              }
                            : doc
                    )
                );
            }, 1500);

            setTimeout(() => {
                setDocuments((prev) =>
                    prev.map((doc) =>
                        doc.id === newDoc.id
                            ? {
                                  ...doc,
                                  status: "completed",
                                  progress: 100,
                                  subject: "Mathematics",
                                  curriculum: "Grade 10",
                              }
                            : doc
                    )
                );
            }, 3000);
        });

        setTimeout(() => {
            setIsUploading(false);
        }, 3500);
    };

    const getStatusIcon = (status: ClassificationStatus["status"]) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "classifying":
                return <Clock className="w-5 h-5 text-blue-500 animate-spin" />;
            case "error":
                return <AlertCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Clock className="w-5 h-5 text-gray-400" />;
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Upload Documents</CardTitle>
                    <CardDescription>Upload source documents for classification and question generation</CardDescription>
                </CardHeader>
                <CardContent>
                    <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium mb-1">Drag and drop files here or click to browse</p>
                        <p className="text-xs text-muted-foreground mb-4">Supports PDF, DOCX, and TXT files</p>
                        <label>
                            <input type="file" multiple onChange={handleFileInput} disabled={isUploading} className="hidden" accept=".pdf,.docx,.txt" />
                            <Button
                                type="button"
                                variant="outline"
                                disabled={isUploading}
                                onClick={(e) => {
                                    const input = e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement;
                                    input?.click();
                                }}
                            >
                                {isUploading ? "Uploading..." : "Browse Files"}
                            </Button>
                        </label>
                    </div>
                </CardContent>
            </Card>

            {documents.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Classification Progress</CardTitle>
                        <CardDescription>Real-time classification of uploaded documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {documents.map((doc) => (
                                <div key={doc.id} className="flex items-start gap-4 p-4 border rounded-lg">
                                    <div className="mt-1">{getStatusIcon(doc.status)}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{doc.name}</p>
                                        <p className="text-sm text-muted-foreground">{doc.status === "completed" ? `Subject: ${doc.subject} • Curriculum: ${doc.curriculum}` : doc.status === "classifying" ? `Classifying... ${doc.progress}%` : "Pending upload"}</p>
                                        {doc.status === "classifying" && (
                                            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${doc.progress}%` }} />
                                            </div>
                                        )}
                                    </div>
                                    {doc.status === "completed" && (
                                        <Button size="sm" variant="outline">
                                            Approve
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
