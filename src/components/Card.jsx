import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Divider,
  Button,
  Flex
} from "@chakra-ui/react";
import ApplyModal from "./ApplyModal";
import ViewDetailsModal from "./ViewDetailsModal";

const Cards = ({ item }) => {
  function handleClick() {

  }
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={item["offersImageText-background src"]}
          alt=""
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item["offersImageTextCard-title"]}</Heading>
          <Text>
            {item["offersCard-text"]}
          </Text>
          <Text color="blue.600" fontSize="2xl">

          </Text>
          <Flex justifyContent="space-between">
            <Link to=""><ViewDetailsModal/></Link>
            <Button borderRadius="20px" onClick={handleClick} 
              _hover={{ bg: "black", color: "white" }}  background={"black"} color={"white"}  w={"100px"}  ><ApplyModal /></Button>
          </Flex>
        </Stack>
      </CardBody>

    </Card>
  );
};

export default Cards;



