import { config } from "@/config/gluestack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  return (
    <GluestackUIProvider config={config}>
      <Slot />
    </GluestackUIProvider>
  );
}
