import { Button, Container, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HStack bg={"black"} color={"white"} h={"10vh"}>
      <Button variant={"unstyled"}  ml={4}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} ml={4}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} ml={4}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};
