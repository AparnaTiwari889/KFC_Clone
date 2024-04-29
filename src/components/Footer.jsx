import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink,Link } from "react-router-dom";



const Footer = () => {
  return (
    <>
      <Box p='6' marginTop={'5'} backgroundColor={"rgb(32,33,36)"} color={"white"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <NavLink to={"/"}> <Image
              src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
              alt="kfc logo"
            /></NavLink>
           
          </Box>

          <Box>
            <Text textAlign="left">
              Legal Terms and Conditions
              <br />
              Privacy Policy
              <br />
              Disclaimer
              <br />
              Caution Notice
            </Text>
          </Box>
          <Box>
            <Text textAlign="left">
              KFC India
              <br />
              About KFC
              <br />
              KFC Care
              <br />
              Careers
              <br />
              Our Golden Past
            </Text>
          </Box>
          <Box>
            <Text textAlign="left">
              KFC Food Menu
              <br />
              Order Lookup
              <br />
              Gift Card
              <br />
              Nutrition & Allergen Support
              <br />
              Get Help
              <br />
              Contact Us
              <br />
              KFC Feedback
              <br />
              Privacy Policy
            </Text>
          </Box>
          <Box>
            <Link href="" color="white">
              Find a KFC
            </Link>
          </Box>
          <Box><Link href="https://play.google.com/store/apps/details?id=com.yum.kfc"><Image src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"/></Link></Box>
          <Box><Link href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379"><Image src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"/></Link></Box>
        </Flex>
        <Flex justifyContent={"center"} gap={"20px"} marginTop={"50px"}>
            <Box>
                <Text>Copyright © KFC Corporation 2024 All Rights Reserved</Text>
              
            </Box>

           
            <Box>
                <Image src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"/>
            </Box>
            <Box>
                <Image src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"/>
            </Box>
            <Box>
                <Image src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"/>
            </Box>
            
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
