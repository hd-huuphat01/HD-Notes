import { config } from "@/config/gluestack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout(): ReactNode {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
