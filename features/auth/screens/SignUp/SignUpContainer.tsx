import { router } from "expo-router";
import React, { useCallback, useState } from "react";

import SignUpView, { SignUpForm } from "./SignUpView";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
// import { useCreateAccount, useLogIn } from "firebase";

interface SignUpContainerProps {}

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

const SignUpContainer: React.FC<SignUpContainerProps> = () => {
  const {
    control,
    setFocus,
    setError,
    formState: { errors, isSubmitting, isValid },
    handleSubmit: doSubmit,
  } = useForm<SignUpForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    delayError: 1000,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSignUp = useCallback(
    async (value: SignUpForm) => {
      const { email, password } = value;
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((value: FirebaseAuthTypes.UserCredential) => {
          console.log("value", value);
          console.log("User account created & signed in!");
          router.push("/home");
        })
        .catch((error: any) => {
          console.log("error", error);
          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }
        });
    },
    [setError]
  );

  const handleSubmit = doSubmit(handleSignUp);

  return (
    <SignUpView
      control={control}
      errors={errors}
      isSubmitting={isSubmitting}
      isDisabled={!isValid || isSubmitting}
      showPassword={showPassword}
      hadleSetShowPassword={() => setShowPassword(!showPassword)}
      onLogin={() => {
        handleSubmit();
      }}
      handleGoToSignUp={() => {
        router.back();
      }}
    />
  );
};

export default SignUpContainer;
