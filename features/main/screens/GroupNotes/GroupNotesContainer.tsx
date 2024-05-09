import { router } from "expo-router";
import React, { useCallback, useState } from "react";

import GroupNotesView from "./GroupNotesView";
import { Alert } from "react-native";
import { useCreateAccount, useLogIn } from "firebase";

interface SignUpContainerProps {}

const GroupNotesContainer: React.FC<SignUpContainerProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleSignUp = useCallback(async () => {
    const user = await useCreateAccount(email, password);
  }, []);

  return (
    <GroupNotesView
      email={email}
      hadleSetEmail={(text: string) => setEmail(text)}
      password={password}
      hadleSetPassword={(text: string) => setPassword(text)}
      showPassword={showPassword}
      hadleSetShowPassword={() => setShowPassword(!showPassword)}
      onLogin={() => {
        handleSignUp();
      }}
      handleGoToSignUp={() => {
        router.back();
      }}
    />
  );
};

export default GroupNotesContainer;
