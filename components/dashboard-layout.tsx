"use client";

import { useState } from "react";
import { useAuthStore } from "@/lib/auth-store";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentsTab } from "@/components/documents-tab";
import { QuestionGenerationTab } from "@/components/question-generation-tab";
import { ArtifactsTab } from "@/components/artifacts-tab";
import { LogOut, Menu, X } from "lucide-react";

export function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? "w-64" : "w-0"} border-r border-border bg-card transition-all duration-300 overflow-hidden`}>
                <div className="p-6 space-y-8 h-full flex flex-col">
                    <div>
                        <h1 className="text-2xl font-bold">Learning</h1>
                        <p className="text-sm text-muted-foreground">Admin Panel</p>
                    </div>

                    <nav className="space-y-2 flex-1">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Navigation</div>
                        <div className="space-y-1">
                            <div className="px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground">Dashboard</div>
                        </div>
                    </nav>

                    <div className="space-y-4 border-t border-border pt-4">
                        <div className="text-xs text-muted-foreground">
                            <p className="font-medium">{user?.email}</p>
                            <p className="capitalize text-xs">{user?.role}</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                    <div className="w-10" />
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto">
                    <div className="p-6">
                        <Tabs defaultValue="documents" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-6">
                                <TabsTrigger value="documents">Documents</TabsTrigger>
                                <TabsTrigger value="generation">Generate Questions</TabsTrigger>
                                <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
                            </TabsList>

                            <TabsContent value="documents" className="space-y-6">
                                <DocumentsTab />
                            </TabsContent>

                            <TabsContent value="generation" className="space-y-6">
                                <QuestionGenerationTab />
                            </TabsContent>

                            <TabsContent value="artifacts" className="space-y-6">
                                <ArtifactsTab />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
