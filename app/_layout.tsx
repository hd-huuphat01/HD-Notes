import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Slot } from "expo-router";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  console.log("first");
  return (
    <GluestackUIProvider config={config}>
      <Slot />
    </GluestackUIProvider>
  );
}
