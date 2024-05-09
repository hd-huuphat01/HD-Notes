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
      console.log("password", password);

      auth()
        .signInWithEmailAndPassword(email, password)
        .then((value: FirebaseAuthTypes.UserCredential) => {
          console.log("value", value);
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
      router.push("/home");
    } catch (error: any) {
      console.log("onLoginViaGoogle error", { error });
    }
  };

  return (
    <SignInView
      control={control}
      errors={errors}
      isSubmitting={isSubmitting}
      isDisabled={!isValid || isSubmitting}
      showPassword={showPassword}
      hadleSetShowPassword={() => setShowPassword(!showPassword)}
      onLogin={() => {
        handleSubmit();
      }}
      onSignInWithGoogle={() => handleSignInWithGoogle()}
      handleGoToSignUp={() => {
        router.push("/sign-up");
      }}
    />
  );
};

export default SignInContainer;
