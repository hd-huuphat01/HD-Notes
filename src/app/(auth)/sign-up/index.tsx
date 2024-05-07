// import { CreateShudi } from "@/features/main";
import { Box, Text } from "@gluestack-ui/themed";
import { StyleSheet, View } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two 2</Text> */}
      <View style={styles.separator} />
      <Text
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
      </Text>
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
export default SignUp;
