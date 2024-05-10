import React, { useEffect } from "react";

import { useRouter } from "expo-router";
import { Box, Text, Image, Spinner } from "@gluestack-ui/themed";
import { LogoImage } from "@/components/Elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Intro(): React.ReactElement {
  const router = useRouter();
  const init = async () => {
    const user = await AsyncStorage.getItem("@currentUser");
    if (!user) {
      router.replace("/sign-in");
    } else {
      router.replace("/home");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Box
      flex={1}
      paddingHorizontal="$4"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
      // pt="$20"
    >
      <LogoImage />
      <Text
        pt="$1"
        fontSize="$xl"
        lineHeight="$2xl"
        fontWeight="bold"
        color="#DAA520"
      >
        HD-Notes
      </Text>
      <Spinner pt="$10" size="large" color="$amber600" />
    </Box>
  );
}

export default Intro;
