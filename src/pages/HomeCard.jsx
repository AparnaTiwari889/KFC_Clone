import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Stack, Heading, Text, Image, Button, ButtonGroup,Divider } from '@chakra-ui/react'
import {ArrowForwardIcon, Icon } from '@chakra-ui/icons'

const HomeCard = ({item}) => {
  return (
   <>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={item ["offersImageText-background src"]}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item["offersImageTextCard-title"]}</Heading>
      <Text>
       {item["offersCard-text"]}
      </Text>
     
    </Stack>
  </CardBody>
  
  <CardFooter>
    <ButtonGroup spacing='2'>
      
    </ButtonGroup>
  </CardFooter>
</Card>

{/* <Card maxW="lg">
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

</Card> */}
</>

  )
}

export default HomeCard
