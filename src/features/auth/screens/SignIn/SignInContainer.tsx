import { router } from "expo-router";
import React from "react";

import SignInView from "./SignInView";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  return (
    <SignInView
      onLogin={() => {
        router.push("/enter-phone-number");
      }}
    />
  );
};

export default SignInContainer;
