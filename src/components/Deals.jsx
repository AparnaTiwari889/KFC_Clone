import React from "react";
import StartOrder from "./StartOrder";
import { Image, Flex, Box, Heading, Link, Grid } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import ApplyModal from "./ApplyModal";

const Deals = () => {
  return (
    <>
      <StartOrder />

      <Box position="relative">
        <Image
          src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg"
          alt="kfc logo"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <Heading as="h1" size="xl">
            DEALS AND OFFERS
          </Heading>
        </Box>
      </Box>
     
      <Flex justifyContent={"space-between"}>
        <Box marginBottom={"20px"} marginTop={"20px"}>
          <Heading> NATIONAL OFFERS</Heading>
        </Box>
        <Box>
          {" "}
          <Link href="http://localhost:5177/Signin" color="black ">
            Sign In to see exclusive offers & deals
          </Link>
        </Box>
      </Flex>
      <Flex width={"80%"} margin={"auto"} padding={"2"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=42.31"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Veg Zinger on
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                      >
                       <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free 1pc Chicken
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                 <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                      >
                        <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Add 2 Pc Hot n...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                     
                      >
                       <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Popcorn...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                 <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                      
                      > <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free 1pc Chicken...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between"gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                        
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free 3pc Strips on...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                        
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Veg Zinger...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                        
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Fries Med...
                </Heading>
                <Text color={"black"}>
                  Free Veg Zinger on a cart value of 499 or more. Friday only.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                 <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                       
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  1 Pc free Veg...
                </Heading>
                <Text color={"black"}>
                  1 Pc free Veg Zinger on a cart value of 499 or above on first
                  order. Only for
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between"gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        gap={"20px"}
                        
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYZINGER.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Chicken...
                </Heading>
                <Text color={"black"}>
                  Free Chicken Zinger on a cart value of 499 or more. Friday
                  only
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between"gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                        backgroundColor={"black"}
                        
                        gap={"20px"}
                        
                      >
                         <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/FREEROLL.jpg?ver=42.35"
                alt="kfc"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg" color={"red.500"}>
                  Free Double...
                </Heading>
                <Text color={"black"}>
                  Free Double chicken roll on a cart value of 999 or above.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Flex
                justifyContent={"space-between"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Flex justifyContent="space-between" gap="90px">
                  <Box>
                    <Link href="">View Details</Link>
                  </Box>

                  <Box>
                    <ButtonGroup spacing="3">
                      <Button
                        size="md"
                        borderRadius={"20px"}
                       background="black"
                        gap={"20px"}
                        
                      >
                        <ApplyModal/>
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>
        </Grid>
      </Flex>
      
    </>
  );
};

export default Deals;
