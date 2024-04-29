import {
  Box,
  Flex,
  Grid,
  Heading,
  Card,
  CardBody,
  Image,
  CardFooter,
  Stack,
  SimpleGrid,
  Divider,
  Link,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import StartOrder from "../components/StartOrder";
import MenuProduct from "../../Database/Menu";
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
  return (
    <>
      <StartOrder />
      <div style={{ height:"90vh", justifyContent:"space-between", display:"flex"}} >
        <div style={{width:"50%", padding:"20px",}}>
          <Heading>KFC MENU</Heading>
          <br />
          <Heading  size={"md"} textAlign={"left"}>
            PERI PERI CHICKEN
            <br />
            VALUE SNACKERS
            <br />
            CHICKEN ROLLS
            <br />
            CHICKEN BUCKETS
            <br />
            BIRYANI BUCKETS
            <br />
            BOX MEALS
            <br />
            BURGERS
            <br />
            SNACKS
            <br />
            BEVERAGES
            <br />
          </Heading>
        </div>

        <div style={{ height:"90vh",overflow:"scroll", top:"100px",right:"0",width:"50%"}}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {MenuProduct.map((item) => (
              <MenuCard item={item} />
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MenuPage;


  