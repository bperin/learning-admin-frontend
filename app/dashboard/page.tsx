"use client";

import { useAuthContext } from "@/providers/auth-provider";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useEvals } from "@/hooks/use-evals";

export default function DashboardPage() {
    const { user, isLoading: authLoading } = useAuthContext();
    const { logout } = useAuth();
    const { listEvals, isLoading: evalsLoading } = useEvals();
    const router = useRouter();
    const [evals, setEvals] = useState<any[]>([]);

    useEffect(() => {
        const loadEvals = async () => {
            const data = await listEvals();
            if (data) {
                setEvals(Array.isArray(data) ? data : []);
            }
        };

        loadEvals();
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    if (authLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">Learning Admin</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">{user?.email}</span>
                            <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Welcome, {user?.displayName || user?.email}</h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 truncate">Total Evaluations</p>
                                        <p className="mt-1 text-3xl font-semibold text-gray-900">{evals.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 truncate">Active Users</p>
                                        <p className="mt-1 text-3xl font-semibold text-gray-900">—</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 truncate">Completion Rate</p>
                                        <p className="mt-1 text-3xl font-semibold text-gray-900">—</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Evaluations</h3>
                        {evalsLoading ? (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Loading evaluations...</p>
                            </div>
                        ) : evals.length === 0 ? (
                            <div className="bg-white rounded-lg shadow p-6 text-center">
                                <p className="text-gray-600">No evaluations found</p>
                            </div>
                        ) : (
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    {evals.map((eval_item: any) => (
                                        <li key={eval_item.id} className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">{eval_item.title || eval_item.id}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{eval_item.description}</p>
                                                </div>
                                                <button className="ml-4 px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-500">View</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
