import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import SignInView, { LoginForm } from "./SignInView";
// import { useCreateAccount, useLogIn } from "firebase";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "validator";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignInContainerProps {}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Mail is required")
    .test(
      "is-valid",
      (message) => `${message.path} is invalid`,
      (value) =>
        value
          ? validator.isEmail(value)
          : new yup.ValidationError("Invalid value")
    ),
  password: yup
    .string()
    .required("Password is required")
    .test("is-valid", "Please enter a strong password", (value) =>
      value
        ? validator.isStrongPassword(value)
        : new yup.ValidationError("Invalid value")
    ),
});

const SignInContainer: React.FC<SignInContainerProps> = () => {
  const {
    control,
    setFocus,
    setError,
    formState: { errors, isSubmitting, isValid },
    handleSubmit: doSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    delayError: 1000,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = useCallback(
    async (value: LoginForm) => {
      const { email, password } = value;
      console.log("email", email);
      console.log("password21", password);

      auth()
        .signInWithEmailAndPassword(email, password)
        .then((value: FirebaseAuthTypes.UserCredential) => {
          console.log("value", value);
          console.log("User account created & signed in!");
          router.push("/home");
        })
        .catch((error) => {
          console.log("error", error);
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }
        });
    },
    [setError]
  );

  const handleSubmit = doSubmit(handleSignIn);

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
      await AsyncStorage.setItem("@currentUser", idtoken.token);
      router.push("/home");
    } catch (error: any) {
      console.log("onLoginViaGoogle error", { error });
    }
  };

  const handleSignInWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"])
      .then((result) => {
        if (result.grantedPermissions) {
          AccessToken.getCurrentAccessToken().then(async (data) => {
            if (data) {
              try {
                const fbCredential = auth.FacebookAuthProvider.credential(
                  data.accessToken
                );
                console.log("fbCredential", fbCredential);
                const firebaseAuth = await auth().signInWithCredential(
                  fbCredential
                );
                console.log("firebaseAuth", firebaseAuth);
                const idtoken = await firebaseAuth.user.getIdTokenResult();
                console.log("idtoken", idtoken);
                router.push("/home");
              } catch (error) {
                console.log("error", error);
              }
            }
          });
        }
      })
      .catch((error) => {
        console.log("login has error: " + error);
      });
  };

  return (
    <SignInView
      control={control}
      errors={errors}
      isSubmitting={isSubmitting}
      isDisabled={!isValid || isSubmitting}
      showPassword={showPassword}
      handleSetShowPassword={() => setShowPassword(!showPassword)}
      onLogin={() => {
        handleSubmit();
      }}
      onSignInWithGoogle={() => handleSignInWithGoogle()}
      onSignInWithFacebook={() => handleSignInWithFacebook()}
      handleGoToSignUp={() => {
        router.push("/sign-up");
      }}
    />
  );
};

export default SignInContainer;
