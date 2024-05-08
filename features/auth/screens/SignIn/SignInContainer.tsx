import { router } from "expo-router";
import React, { useCallback, useState } from "react";

import SignInView from "./SignInView";
import { Alert } from "react-native";
import { useCreateAccount } from "firebase";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleSignUp = useCallback(async () => {
    const user = await useCreateAccount(
      "jane.doe@example.com",
      "SuperSecretPassword!"
    );
  }, []);
  return (
    <SignInView
      showPassword={showPassword}
      hadleSetShowPassword={handleState}
      onLogin={() => {
        // router.push("/sign-up");
        console.log("first");
        handleSignUp();
      }}
    />
  );
};

export default SignInContainer;
