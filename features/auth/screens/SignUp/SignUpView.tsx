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
} from "@gluestack-ui/themed";
import LogoView from "@/components/Elements/Logo";

interface SignInViewProps {
  showPassword: boolean;
  hadleSetShowPassword: () => void;
  onLogin: () => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  showPassword,
  hadleSetShowPassword,
  onLogin,
}) => (
  <Box alignItems="center" pt="$20" paddingHorizontal="$4">
    <LogoView />
    <FormControl pt="$10" w="$full">
      <VStack space="xs">
        <Text color="$secondary_yellow4" lineHeight="$xs" pb="$1">
          Email
        </Text>
        <Input>
          <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
            <InputIcon size="lg" as={MailIcon} color="$borderDark500" />
          </InputSlot>
          <InputField type="text" />
        </Input>
      </VStack>
      <VStack space="xs">
        <Text color="$secondary_yellow4" lineHeight="$xs" pt="$3" pb="$1">
          Password
        </Text>
        <Input>
          <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
            <InputIcon size="lg" as={LockIcon} color="$borderDark500" />
          </InputSlot>
          <InputField type={showPassword ? "text" : "password"} />
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
    <Button onPress={onLogin} mt="$10" w="$40" bgColor="$secondary_yellow3">
      <ButtonText color="$white">Sign up</ButtonText>
    </Button>
  </Box>
);
export default SignInView;
