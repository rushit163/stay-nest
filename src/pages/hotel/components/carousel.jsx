import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import hotelImge from '../../../utils/hotel.jpeg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const ImageCarousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-90">
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-[80vw] h-[50vh]'/></SwiperSlide>
    </Swiper>
  )
}

export default ImageCarousel