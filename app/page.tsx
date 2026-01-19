"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/providers/auth-provider";

export default function Home() {
    const { isAuthenticated, isLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        if (isAuthenticated) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [isAuthenticated, isLoading, router]);

    return null;
}
