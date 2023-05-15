import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px"></Image>
    </HStack>
  );
};

export default NavBar;
