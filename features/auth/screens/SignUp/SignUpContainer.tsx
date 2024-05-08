import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import auth from "@react-native-firebase/auth";

import SignInView from "./SignUpView";
import { Alert } from "react-native";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleSignUp = useCallback(() => {
    try {
      auth()
        .createUserWithEmailAndPassword(
          "jane.doe@example.com",
          "SuperSecretPassword!"
        )
        .then(() => {
          console.log("User account created & signed in!");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }
          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }
          console.error(error);
        });
    } catch (e) {
      console.log(e);
      Alert.alert("Oppss", "Please check again");
    }
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
