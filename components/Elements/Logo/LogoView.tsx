import Logo from "@/assets/images/Logo.png";
import { Image } from "@gluestack-ui/themed";

const LogoView = () => {
  return <Image alt="logo" size="lg" borderRadius={10} source={Logo} />;
};

export default LogoView;
