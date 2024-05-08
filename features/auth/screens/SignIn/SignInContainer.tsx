import { router } from "expo-router";
import React, { useCallback, useState } from "react";

import SignInView from "./SignInView";
import { Alert } from "react-native";
import { useCreateAccount, useLogIn } from "firebase";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSignIn = useCallback(async () => {
    console.log("email1", email);
    console.log("password2", password);
    const user = await useLogIn(email, password);
  }, []);

  return (
    <SignInView
      email={email}
      hadleSetEmail={(text: string) => setEmail(text)}
      password={password}
      hadleSetPassword={(text: string) => setPassword(text)}
      showPassword={showPassword}
      hadleSetShowPassword={() => setShowPassword(!showPassword)}
      onLogin={() => {
        handleSignIn();
      }}
      handleGoToSignUp={() => {
        router.push("/sign-up");
      }}
    />
  );
};

export default SignInContainer;
