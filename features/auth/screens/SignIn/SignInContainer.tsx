import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import SignInView from "./SignInView";
import { useCreateAccount, useLogIn } from "firebase";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "878409843897-7ce3euglnsg04p3jcn9n108v908uo1m5.apps.googleusercontent.com",
  //     // offlineAccess: true,
  //   });
  // }, []);

  const handleSignIn = useCallback(async () => {
    console.log("email1", email);
    console.log("password2", password);
    const user = await useLogIn(email, password);
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      // const user = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(
      //   result.idToken,
      // );
      // const firebaseAuth = await auth().signInWithCredential(googleCredential);
      // const idtoken = await firebaseAuth.user.getIdTokenResult();
      // console.log(user);
      // setUserInfo(user);
      // setError();
    } catch (error: any) {
      console.log("onLoginViaGoogle error", { error });
    }
  };

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
      onSignInWithGoogle={() => handleSignInWithGoogle()}
      handleGoToSignUp={() => {
        router.push("/sign-up");
      }}
    />
  );
};

export default SignInContainer;
