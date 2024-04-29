import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Grid,
  Divider,
  ButtonGroup,
  Button
} from "@chakra-ui/react";
const MenuCard = ({item}) => {
  return (
    <>
     
        
        <Card maxW="sm">
          <CardBody>
            <Image
              src={item ["medium-menu-product-image src"]}
              alt="kfc"
              borderRadius="lg"
            />
            <Image
              src={item ["menu-vegOrNonVeg-icon src"]}
              alt="kfc"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {item  ["medium-menu-product-header"]}
              </Heading>
              <Text>{item ["medium-menu-vegOrNonVeg"]}</Text>
              <Text color={"red"}>
                {item ["medium-menu-product-price"]}
              </Text>
              <Text>{item  ["medium-menu-product-description"]}</Text>
            </Stack>
            <ButtonGroup>
              <Button background={"red"} color={"White"} borderRadius={"20px"} marginTop={"20px"}>Add to Cart</Button>
            </ButtonGroup>
          </CardBody>
          <Divider />
        </Card>
     
    </>
  );
};

export default MenuCard;
