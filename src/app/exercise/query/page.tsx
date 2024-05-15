"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/app";

const queryClient = new QueryClient({});

export default async function ExerciseQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
