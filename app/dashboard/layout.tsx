"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, Settings, LogOut, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        router.push("/login");
    };

    return (
        <div className="flex h-screen bg-gray-950 text-gray-50">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col`}>
                {/* Logo/Header */}
                <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                    {sidebarOpen && <h1 className="text-xl font-bold text-blue-400">Learning</h1>}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
                        <BookOpen className="w-5 h-5" />
                        {sidebarOpen && <span>Subjects</span>}
                    </Link>

                    <Link href="/dashboard/schemas" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
                        <Settings className="w-5 h-5" />
                        {sidebarOpen && <span>Schemas</span>}
                    </Link>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-800">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900/20 transition-colors text-red-400 hover:text-red-300">
                        <LogOut className="w-5 h-5" />
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="bg-gray-900 border-b border-gray-800 px-8 py-4">
                    <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-8">{children}</div>
            </div>
        </div>
    );
}
