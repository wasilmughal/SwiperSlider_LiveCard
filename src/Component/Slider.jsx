import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "./Slider.css"



// import required modules
import { Navigation } from 'swiper/modules';
import LiveCard from "./LiveCard";
import {data} from "../LocalDataBase/Data"

function Slider() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
    console.log(data)
  return (
    <div className="py-2 sm:px-10 px-5">
      <Swiper
        slidesPerView={1}
        breakpoints={breakpoints}
        autoplay={{ delay: 3000 }}

        spaceBetween={3}
        navigation={true}
         modules={[Navigation]}
         className="mySwiper "
      >
{/* {
    data.map((item,index)=>(
         
    ))
} */}
        <SwiperSlide className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-8">
            <div className=""><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
           
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3  px-8">
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            

        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3  px-8">
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            <div><LiveCard/></div>
            

        </SwiperSlide>
      
      </Swiper>


    </div>
  );
}

export default Slider;
