import React from 'react'
import { Box, Flex, Button } from '@chakra-ui/react'

const StartOrder = () => {
  return (
    <Flex
    backgroundColor={"black"}
    color={"white"}
    justifyContent={"center"}
    h={"12vh"}
    borderBottom={"1px solid gray"}
    alignItems={"center"}
  >
    <Flex gap={"20px"} justifyContent={"space-between"} alignItems={"center"}>
      


      <Box>

        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
      </Box>

      <Box>
        <Button
          size="lg"
          borderRadius={"20px"}
          backgroundColor={"red"}
          color={"white"}
        >
          {" "}
         Start Order{" "}
        </Button>
      </Box>
    </Flex>
  </Flex>
  )
}

export default StartOrder
