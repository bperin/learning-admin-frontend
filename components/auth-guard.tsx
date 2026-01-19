"use client";

import { useAuthContext } from "@/providers/auth-provider";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const PUBLIC_ROUTES = ["/login", "/signup"];

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuthContext();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (isLoading) return;

        const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

        if (!isAuthenticated && !isPublicRoute) {
            router.push("/login");
        } else if (isAuthenticated && isPublicRoute) {
            router.push("/dashboard");
        }
    }, [isAuthenticated, isLoading, pathname, router]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
