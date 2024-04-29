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
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  
  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Link>
          <Button onClick={onOpen} background={"black"} color={"white"} borderRadius={"20px"} w={"100px"}   >
               Apply
          </Button>
        </Link>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="2xl">
            <Box boxShadow={"lg"} textAlign={"center"}> <ModalHeader>Start Your Order</ModalHeader></Box>
           
            <ModalCloseButton />
            <ModalBody >
             <Box textAlign={"justify"}>  <Heading size={"lg"}> HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</Heading></Box> 
             
           
              <Flex flexDirection="column" gap="50px" alignItems="center">
                <Button  w="400px" borderRadius={"40px"} size={"lg"} background={"white"} color={"black"} border={"1px solid black"} onClick={onClose}>
                  Delivery
                </Button>
  
                <Button  w="400px" borderRadius={"40px"} size={"lg"} background={"white"} color={"black"} border={"1px solid black"} onClick={onClose}>
                  PickUp 
                </Button>
  
                <Button  w="400px" borderRadius={"40px"} size={"lg"} background={"white"} color={"black"} border={"1px solid black"} onClick={onClose}>
                  Dine In
                </Button>
              </Flex>
            </ModalBody>
  
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default BasicUsage
  
  