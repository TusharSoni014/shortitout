"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import AuthSessionProvider from "./SessionProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <AuthSessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthSessionProvider>
  );
}
