import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Alert } from "react-native";

export default function Layout() {
  return (
    <Stack screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="group-notes"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
