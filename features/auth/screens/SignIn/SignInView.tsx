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
} from "@gluestack-ui/themed";
import LogoView from "@/components/Elements/Logo";
import IconGoogle from "@/assets/images/google.png";
import IconFacebook from "@/assets/images/facebook.png";
import { Control } from "react-hook-form";

export interface LoginForm {
  email: string;
  password: string;
}

interface SignInViewProps {
  email: string;
  hadleSetEmail: (text: string) => void;
  password: string;
  hadleSetPassword: (text: string) => void;
  showPassword: boolean;
  hadleSetShowPassword: () => void;
  onLogin: () => void;
  handleGoToSignUp: () => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  email,
  hadleSetEmail,
  password,
  hadleSetPassword,
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
      Login to continue
    </Text>
    <FormControl pt="$10" w="$full">
      <VStack space="xs">
        <Text
          color="$secondary_yellow4"
          fontWeight="bold"
          lineHeight="$xs"
          pb="$1"
        >
          Email
        </Text>
        <Input>
          <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
            <InputIcon size="lg" as={MailIcon} color="$borderDark500" />
          </InputSlot>
          <InputField
            type="text"
            value={email}
            onChangeText={(text) => {
              hadleSetEmail(text);
            }}
          />
        </Input>
      </VStack>
      <VStack space="xs">
        <Text
          color="$secondary_yellow4"
          fontWeight="bold"
          lineHeight="$xs"
          pt="$3"
          pb="$1"
        >
          Password
        </Text>
        <Input>
          <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
            <InputIcon size="lg" as={LockIcon} color="$borderDark500" />
          </InputSlot>
          <InputField
            type={showPassword ? "text" : "password"}
            value={password}
            onChangeText={(text) => {
              hadleSetPassword(text);
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
      </VStack>
    </FormControl>
    <Button onPress={onLogin} mt="$8" w="$full" bgColor="$secondary_yellow3">
      <ButtonText color="$white" fontWeight="bold">
        LOG IN
      </ButtonText>
    </Button>
    <Box pt="$10" flexDirection="row" alignItems="center">
      <Box h="$0.5" w="$32" bgColor="$black" />
      <Text
        color="$black"
        fontSize="$sm"
        fontWeight="$semibold"
        pr="$2"
        pl="$2"
      >
        OR
      </Text>
      <Box h="$0.5" w="$32" bgColor="$black" />
    </Box>

    <Pressable
      onPress={() => console.log("Hello")}
      w="$full"
      mt="$10"
      p="$2"
      flexDirection="row"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderDark600"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image alt="logo1" size="2xs" borderRadius={10} source={IconGoogle} />
      <Text color="$black" fontSize="$sm" fontWeight="$semibold" pl="$2">
        Sign in with Google
      </Text>
      <Box />
    </Pressable>
    <Pressable
      onPress={() => console.log("Hello")}
      w="$full"
      mt="$4"
      p="$2"
      flexDirection="row"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderDark600"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image alt="logo1" size="2xs" borderRadius={10} source={IconFacebook} />
      <Text color="$black" fontSize="$sm" fontWeight="$semibold" pl="$2">
        Sign in with Facebook
      </Text>
      <Box />
    </Pressable>

    <Box pt="$20" flexDirection="row">
      <Text color="$black" fontSize="$sm" fontWeight="$semibold">
        Don't have an account?
      </Text>
      <Pressable onPress={handleGoToSignUp} pl="$1">
        <Text color="$secondary_yellow4" fontSize="$sm" fontWeight="$semibold">
          Sign up now
        </Text>
      </Pressable>
    </Box>
  </Box>
);
export default SignInView;
