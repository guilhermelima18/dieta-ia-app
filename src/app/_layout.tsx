import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { queryClient } from "../libs/react-query";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="step-one/index" options={{ headerShown: false }} />
        <Stack.Screen name="step-two/index" options={{ headerShown: false }} />
        <Stack.Screen name="nutrition/index" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
