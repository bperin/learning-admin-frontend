import type { Metadata } from "next";
import "./globals.css";
import { AuthGuard } from "@/components/auth-guard";

export const metadata: Metadata = {
    title: "Learning Admin",
    description: "Admin panel for learning platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body>
                <AuthGuard>{children}</AuthGuard>
            </body>
        </html>
    );
}
