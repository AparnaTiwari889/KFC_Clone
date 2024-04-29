import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Link,
    Heading,
    Box,
    Flex,
    Text,
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
  import ApplyModal from "./ApplyModal";
  
  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Link textDecoration="underline">
          <Button
            onClick={onOpen}
            variant="link"
            color="inherit"
            _hover={{ textDecoration: "underline" }}
            _focus={{ boxShadow: "none" }}
            _active={{ boxShadow: "none" }}
            _focusVisible={{ boxShadow: "none" }}
           
          >
            View Details
          </Button>
        </Link>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="2xl">
            <Box boxShadow={"lg"} >
              <ModalHeader > OFFERS AND DEALS </ModalHeader>
            </Box>
  
            <ModalCloseButton />
            <ModalBody>
              <Box textAlign={"justify"}>
                <Heading size={"lg"} textAlign="center">
                  FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST
                  ORDER. ONLY FOR REGISTERED USERS.
                </Heading>
              </Box>
              <Text textAlign="center">Valid to 31/12/30</Text>
              <Text textAlign="center">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.</Text>
  
              <Flex flexDirection="column" gap="50px" alignItems="center">
                <Link 
                >
                <Button
                  w="400px"
                  borderRadius={"40px"}
                  size={"lg"}
                  background={"black"} color={"white"} 



                  
                  border={"1px solid black"}
                 
                  marginTop="30px"
                >
                    <ApplyModal/>
                
                </Button>
                
                </Link>
                
              </Flex>
            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default BasicUsage;
  