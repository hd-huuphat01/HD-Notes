import React from "react";
import {
  Box,
  Button,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
  Image,
  Text,
  MailIcon,
  LockIcon,
  ButtonText,
  Pressable,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";
import LogoView from "@/components/Elements/Logo";
import { Control, Controller, FieldErrors } from "react-hook-form";

export interface SignUpForm {
  email: string;
  password: string;
}

interface SignUpViewProps {
  control: Control<SignUpForm>;
  errors: FieldErrors<SignUpForm>;
  isSubmitting?: boolean;
  isDisabled?: boolean;

  showPassword: boolean;
  hadleSetShowPassword: () => void;
  onLogin: () => void;
  handleGoToSignUp: () => void;
}

const SignUpView: React.FC<SignUpViewProps> = ({
  control,
  errors,
  isSubmitting = false,
  isDisabled = false,

  showPassword,
  hadleSetShowPassword,
  onLogin,
  handleGoToSignUp,
}) => (
  <Box alignItems="center" pt="$20" paddingHorizontal="$4">
    <LogoView />
    <Text
      color="$secondary_yellow4"
      fontSize="$md"
      fontWeight="bold"
      lineHeight="$xs"
      pt="$3"
      pb="$1"
    >
      Create a new account
    </Text>
    <Box w="$full">
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl pt="$10" w="$full" isInvalid={!!errors.email?.message}>
            <FormControlLabel mb="$2">
              <FormControlLabelText
                fontWeight="bold"
                color="$secondary_yellow4"
              >
                Email
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
                <InputIcon size="lg" as={MailIcon} color="$borderDark500" />
              </InputSlot>
              <InputField
                onBlur={onBlur}
                type="text"
                value={value}
                isDisabled={isSubmitting}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
              />
            </Input>
            <FormControlError accessibilityRole="alert">
              <FormControlErrorIcon
                as={AlertCircleIcon}
                size="2xs"
                color="$error700"
              />
              {/* <InputIcon size="lg" as={MailIcon} color="$borderDark500" /> */}
              <FormControlErrorText fontSize="$xs">
                {errors.email?.message ?? ""}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl pt="$5" w="$full" isInvalid={!!errors.password?.message}>
            <FormControlLabel mb="$2">
              <FormControlLabelText
                fontWeight="bold"
                color="$secondary_yellow4"
              >
                Password
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
                <InputIcon size="lg" as={LockIcon} color="$borderDark500" />
              </InputSlot>
              <InputField
                type={showPassword ? "text" : "password"}
                value={value}
                isDisabled={isSubmitting}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
              />
              <InputSlot pr="$3" onPress={hadleSetShowPassword}>
                <InputIcon
                  size="lg"
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$borderDark500"
                />
              </InputSlot>
            </Input>
            <FormControlError accessibilityRole="alert">
              <FormControlErrorIcon
                as={AlertCircleIcon}
                size="2xs"
                color="$error700"
              />
              {/* <InputIcon size="lg" as={MailIcon} color="$borderDark500" /> */}
              <FormControlErrorText fontSize="$xs">
                {errors.password?.message ?? ""}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        )}
      />
    </Box>

    <Button onPress={onLogin} mt="$8" w="$full" bgColor="$secondary_yellow3">
      <ButtonText color="$white" fontWeight="bold">
        Sign up
      </ButtonText>
    </Button>
    <Box pt="$20" flexDirection="row">
      <Text color="$black" fontSize="$sm" fontWeight="$semibold">
        Already have an account?
      </Text>
      <Pressable onPress={handleGoToSignUp} pl="$1" isDisabled={isDisabled}>
        <Text color="$secondary_yellow4" fontSize="$sm" fontWeight="$semibold">
          Login here
        </Text>
      </Pressable>
    </Box>
  </Box>
);
export default SignUpView;
