import React, { useEffect } from "react";

import { useRouter } from "expo-router";
import { Box, Text, Image, Spinner } from "@gluestack-ui/themed";
import { LogoImage } from "@/components/Elements";

function Intro(): React.ReactElement {
  const router = useRouter();
  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 1000)
    );
    router.replace("/sign-in");
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
        sx={{
          "@base": {
            fontSize: "$xl",
            lineHeight: "$2xl",
            fontWeight: "bold",
            color: "#DAA520",
          },
          "@sm": {
            fontSize: "$8xl",
            lineHeight: "$7xl",
          },
        }}
      >
        HD-Notes
      </Text>
      <Spinner pt="$10" size="large" color="$amber600" />
    </Box>
  );
}

export default Intro;
