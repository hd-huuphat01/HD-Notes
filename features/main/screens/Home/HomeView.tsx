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

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = ({}) => (
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
      Home1
    </Text>
  </Box>
);
export default HomeView;
