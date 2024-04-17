import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import style from "./Swiper2.module.css"
import FoodCard from "../../FoodCategory/FoodCard/FoodCard";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
const Swiper2 = () => {

  // const swiper = new Swiper('.swiper', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  return (
    <div className={style.container} >
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
        <SwiperSlide><FoodCard/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiper2;
