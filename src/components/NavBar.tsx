import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      {" "}
      //? Hstack for horizantly
      <Image
        src={logo}
        boxSize="60px"
        cursor={"pointer"}
        transition="transform 0.3s ease-in-out" // Optional: Add a smooth transition
        _hover={{
          transform: "scale(1.04)",
        }}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
