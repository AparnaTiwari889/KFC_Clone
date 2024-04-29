import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  
  Box,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import Slider from "../components/Slider";
import Banner from "../components/Banner";
import HomeCard from "./HomeCard";
import HomeProduct from "../../Database/Home";
const Home = () => {
  return (
    <>
    <Banner
        url={
          "https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1280&fit=fill&fm=webp"
        }
      />
   <Box width={"80%"} margin={"auto"} padding={"2"}> 
   
      <Flex>
        <Box marginBottom={"20px"} marginTop={"20px"}>
          <Heading> BROWSE CATEGORIES</Heading>
        </Box>
      </Flex>
     
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {HomeProduct.map((item) => (
              <HomeCard item={item} />
            ))}
          </Grid>
         

</Box>
<Slider/>
    </>
  );
};

export default Home;





{/* <Flex alignItems={"center"} marginBottom={"20px"}>
<Grid templateColumns="repeat(4, 1fr)" gap={6}>
  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=42.27"
        alt="peri peri chicken"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">PERI PERI CHICKEN</Heading>
      </Stack>
    </CardBody>
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=42.27"
        alt="chicken bites"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">VALUE SNACKERS</Heading>
      </Stack>
    </CardBody>
   
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=42.27"
        alt="chicken roll"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">CHICKEN ROLLS</Heading>
        
      </Stack>
    </CardBody>
    
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=42.27"
        alt="chicken bucket"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">CHICKEN BUCKET</Heading>
        </Stack>
    </CardBody>
   
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=42.27"
        alt="biryani bucket"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">BIRYANI BUCKETS</Heading>
       
      </Stack>
    </CardBody>
    
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=42.27"
        alt="box meals"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">BOX MEALS</Heading>
        
      </Stack>
    </CardBody>
    
  </Card>

  <Card maxW="sm">
    <CardBody>
      <Image
        src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=42.27"
        alt="burgers"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">BURGERS</Heading>
       
        
      </Stack>
    </CardBody>
   
  </Card>

  <Card maxW="lg">
    <CardBody>
        
      <Image
        src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
        alt="its finger lickin good"
        size="lg"
        margin={"auto"}
      />
      
      <Stack mt="6" spacing="3">
        <Heading size="md">View All Menu <Icon as={ArrowForwardIcon} /> </Heading>
        
      </Stack>
    </CardBody>
   
  </Card>
</Grid>
</Flex>
<Slider /> */}