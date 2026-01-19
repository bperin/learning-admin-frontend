"use client";

import { useSubjects } from "@/hooks/use-subjects";
import { Loader2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SubjectsPage() {
    const { subjects, isLoading, error } = useSubjects();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-red-400">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Subjects</h1>
                    <p className="text-gray-400 mt-1">Manage academic subjects and their hierarchies</p>
                </div>
            </div>

            <div className="rounded-md border border-gray-800 bg-gray-900/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800 hover:bg-transparent">
                            <TableHead className="text-gray-400">Name</TableHead>
                            <TableHead className="text-gray-400">ID</TableHead>
                            <TableHead className="text-gray-400">Sub-Subjects</TableHead>
                            <TableHead className="text-right text-gray-400">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subjects.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                                    No subjects found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            subjects.map((subject: any) => (
                                <TableRow key={subject.id} className="border-gray-800 hover:bg-gray-800/50">
                                    <TableCell>
                                        <div className="font-medium text-white">{subject.name}</div>
                                        {subject.url && (
                                            <a href={subject.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">
                                                {subject.url}
                                            </a>
                                        )}
                                    </TableCell>
                                    <TableCell className="font-mono text-xs text-gray-400">{subject.id}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-2">
                                            {subject.sub_subjects?.map((sub: any) => (
                                                <Badge key={sub.id} variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                                                    {sub.name}
                                                </Badge>
                                            )) || <span className="text-gray-600 text-xs">None</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">Edit</button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
