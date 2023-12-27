//* This is for refactoring duplicated style for the box of skeleton and the game card

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.3s ease-in-out" // Optional: Add a smooth transition
      _hover={{
        transform: "scale(1.06)",
      }}
      cursor={"pointer"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
