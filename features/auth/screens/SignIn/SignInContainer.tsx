import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import SignInView from "./SignInView";
// import { useCreateAccount, useLogIn } from "firebase";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  useEffect(() => {}, []);

  const handleSignIn = useCallback(() => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((value: FirebaseAuthTypes.UserCredential) => {
        console.log("first", value);
        console.log("User account created & signed in!");
        router.push("/home");
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
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          "878409843897-7ce3euglnsg04p3jcn9n108v908uo1m5.apps.googleusercontent.com",
        // offlineAccess: true,
      });
      const result = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        result.idToken
      );
      const firebaseAuth = await auth().signInWithCredential(googleCredential);
      const idtoken = await firebaseAuth.user.getIdTokenResult();
      console.log("idtoken", idtoken);
      router.push("/sign-up");
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
