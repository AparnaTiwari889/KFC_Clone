import { Box, Flex, Image, Heading,ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartModal from "./CartModal"; 

const Navbar = () => {
  return (
    <>
      <MiniNavbar />
      <Flex p={"9"} justifyContent={"space-between"} alignItems={"center"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Box>
            <NavLink to={"/"}>
              <Image
                src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                alt="kfc logo"
              />
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/menu">Menu</NavLink>
          </Box>
          <Box>
            <NavLink to="/deals">Deals</NavLink>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Flex gap={"20px"}>
            <Box>
              <Link>
                <Image
                  src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                  alt="kfc logo"
                />
              </Link>
            </Box>
            <Box>
              <NavLink to="/Signin">
                Sign in
              </NavLink>
            </Box>
          </Flex>

          <Box>
         
            <CartModal />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

function MiniNavbar() {
  return (
    <Flex
      justifyContent={"center"}
      h={"8vh"}
      borderBottom={"1px solid gray"}
      alignItems={"center"}
    >
      <Flex gap={"20px"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Image
            src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg"
            alt="kfc logo"
          />
        </Box>
        <Box>Allow location access for local store menu and promos</Box>
        <Button
          size="sm"
          borderRadius={"20px"}
          backgroundColor={"black"}
          color={"white"}
        >
          Set Location
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
