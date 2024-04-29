import { Box, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import StartOrder from "./StartOrder";


const Banner = ({ url }) => {
  return (
    <>
      <StartOrder/>
      <Box>
        <Image src={url} alt="kfc logo" />
      </Box>
    </>
  );
};




export default Banner;


