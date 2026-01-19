"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, BookOpen, Users, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Welcome to the Learning Platform Admin Panel</p>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-dashed border-primary/50 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Plus className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Construct Suite</h3>
                                <p className="text-sm text-muted-foreground">Start the multi-step test creation workflow</p>
                            </div>
                            <Link href="/dashboard/test-creation" className="w-full">
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Manage Subjects</h3>
                                <p className="text-sm text-muted-foreground">View and organize subject areas</p>
                            </div>
                            <Badge variant="secondary">Available</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-green-100 rounded-full">
                                <FileText className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Test Management</h3>
                                <p className="text-sm text-muted-foreground">Monitor and manage assessments</p>
                            </div>
                            <Badge variant="secondary">Coming Soon</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <TrendingUp className="w-8 h-8 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Analytics</h3>
                                <p className="text-sm text-muted-foreground">View performance metrics</p>
                            </div>
                            <Badge variant="secondary">Coming Soon</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-medium mb-2">Welcome to Construct Suite</h4>
                                <p className="text-sm text-muted-foreground mb-3">Create comprehensive tests by selecting subjects and books from our content library.</p>
                                <Link href="/dashboard/test-creation">
                                    <Button size="sm">Start Creating →</Button>
                                </Link>
                            </div>
                            <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-medium mb-2">Multi-Step Process</h4>
                                <p className="text-sm text-muted-foreground">
                                    1. Select subject areas
                                    <br />
                                    2. Choose specific books
                                    <br />
                                    3. Configure and create test
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>System Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Backend API</span>
                                <Badge variant="default">Online</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Content Discovery</span>
                                <Badge variant="default">Ready</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Subject Library</span>
                                <Badge variant="default">Available</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Book Scraping</span>
                                <Badge variant="default">Active</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
