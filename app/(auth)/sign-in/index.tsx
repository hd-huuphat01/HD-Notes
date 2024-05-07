import React from "react";

import { SignIn } from "features/auth";
import { View, StyleSheet, Text } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two 2</Text>
      <View style={styles.separator} />
      {/* <Text
        pt="$1"
        sx={{
          "@base": {
            fontSize: "$6xl",
            lineHeight: "$6xl",
            fontWeight: "bold",
            color: "$primary600",
          },
          "@sm": {
            fontSize: "$8xl",
            lineHeight: "$7xl",
          },
        }}
      >
        SHUDI
      </Text> */}
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
export default Login;
