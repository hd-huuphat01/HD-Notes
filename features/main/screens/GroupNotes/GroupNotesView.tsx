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

interface SignUpViewProps {
  email: string;
  handleSetEmail: (text: string) => void;
  password: string;
  handleSetPassword: (text: string) => void;
  showPassword: boolean;
  handleSetShowPassword: () => void;
  onLogin: () => void;
  handleGoToSignUp: () => void;
}

const GroupNotesView: React.FC<SignUpViewProps> = ({
  email,
  handleSetEmail,
  password,
  handleSetPassword,
  showPassword,
  handleSetShowPassword,
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
          <InputSlot pl="$2" pr="$1" onPress={handleSetShowPassword}>
            <InputIcon size="lg" as={MailIcon} color="$borderDark500" />
          </InputSlot>
          <InputField
            type="text"
            value={email}
            onChangeText={(text) => {
              handleSetEmail(text);
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
          <InputSlot pl="$2" pr="$1" onPress={handleSetShowPassword}>
            <InputIcon size="lg" as={LockIcon} color="$borderDark500" />
          </InputSlot>
          <InputField
            type={showPassword ? "text" : "password"}
            value={password}
            onChangeText={(text) => {
              handleSetPassword(text);
            }}
          />
          <InputSlot pr="$3" onPress={handleSetShowPassword}>
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
        Sign up
      </ButtonText>
    </Button>
    <Box pt="$20" flexDirection="row">
      <Text color="$black" fontSize="$sm" fontWeight="$semibold">
        Already have an account?
      </Text>
      <Pressable onPress={handleGoToSignUp} pl="$1">
        <Text color="$secondary_yellow4" fontSize="$sm" fontWeight="$semibold">
          Login here
        </Text>
      </Pressable>
    </Box>
  </Box>
);
export default GroupNotesView;
