import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import sliderProduct from '../../Database/slider';
import {ArrowForwardIcon, Icon } from '@chakra-ui/icons'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from './Card';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
    <Box backgroundColor={"rgb(32,33,36)"} color={"white"} marginTop={"40px"}>

      
    <Flex justifyContent={"space-between"} alignItems={"center"}  >
      <Box marginTop="50px" padding={"20px"}>
         <Heading>OFFERS & DEALS</Heading>
      </Box>
      <Box marginTop="50px" marginBottom="40px" padding={"20px"}><Link to="/deals"> View All Details <Icon as={ArrowForwardIcon} /> </Link>
     
      </Box>
    </Flex>


   <Box marginTop={"50px"} padding={"20px"} background={"rgb(32,33,36)"}>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{width:"80%", margin:"auto",   paddingBottom:"30px"}}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
        {
          sliderProduct.map((item)=>(
            <SwiperSlide><Cards item={item} /></SwiperSlide>
          ))
        }
    </Swiper>
    </Box>
    </Box>
    </>
  );
};

export default Slider;