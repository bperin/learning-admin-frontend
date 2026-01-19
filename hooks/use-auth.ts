"use client";

import { useAuthStore } from "@/lib/auth-store";
import { createApiClient } from "@/lib/api-client";
import { TokenRepository } from "@/lib/token-repository";
import type { UsersUser, UsersUserRoleType } from "@/generated";
import { useState } from "react";

export function useAuth() {
    const { isAuthenticated, user, setAuthData, logout: storeLogout } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email: string, password: string) => {
        console.log("[useAuth] login requested for:", email);
        setIsLoading(true);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.auth.oauthTokenPost({
                authdtoTokenRequest: {
                    grantType: "password",
                    email,
                    password,
                },
            });

            console.log("[useAuth] login successful, tokens received");

            if (response.accessToken && response.refreshToken) {
                await TokenRepository.saveTokens({
                    accessToken: response.accessToken,
                    refreshToken: response.refreshToken,
                });
                console.log("[useAuth] tokens saved to repository");

                // Fetch user profile now that we have valid tokens
                try {
                    const apiClient = createApiClient();
                    const userProfile = await apiClient.users.usersMeGet();
                    console.log("[useAuth] user profile fetched:", userProfile.email);

                    await TokenRepository.saveUser(userProfile);
                    console.log("[useAuth] user profile saved");

                    // Update auth state with token and user data (NO PASSWORD)
                    setAuthData(response.accessToken, {
                        id: userProfile.id,
                        email: userProfile.email,
                        role: userProfile.role,
                    });
                } catch (userError) {
                    console.error("[useAuth] failed to fetch user profile:", userError);
                    // Continue with auth even if user fetch fails
                    setAuthData(response.accessToken, {
                        id: "unknown",
                        email: email,
                        role: "admin",
                    });
                }

                console.log("[useAuth] authentication state set to true");
            } else {
                console.warn("[useAuth] login response missing tokens");
                throw new Error("Authentication response missing required tokens");
            }
        } catch (e: any) {
            console.error("[useAuth] login failed:", e);
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (email: string, password: string, displayName?: string, role: UsersUserRoleType = "LEARNER") => {
        console.log("[useAuth] signup requested for:", email, "with role:", role);
        setIsLoading(true);
        try {
            const apiClient = createApiClient();
            const response = await apiClient.users.signupPost({
                usersSignupRequest: {
                    email,
                    password,
                    displayName,
                    role,
                },
            });

            console.log("[useAuth] signup successful");

            if (response) {
                await TokenRepository.saveUser(response);
            }
        } catch (e: any) {
            console.error("[useAuth] signup failed:", e);
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        console.log("[useAuth] logout requested");
        try {
            storeLogout();
            console.log("[useAuth] logout complete, state cleared");
        } catch (e) {
            console.error("[useAuth] logout failed:", e);
        }
    };

    return {
        isAuthenticated,
        isLoading,
        user,
        login,
        signup,
        logout,
    };
}
