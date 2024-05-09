import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Swiper2.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import FoodCard from "../../FoodCategory/FoodCard/FoodCard";

const Swiper2 = (props) => {
  return (<></>
    // <div className={style.SwipperContainer}>
    //   <Swiper
    //     spaceBetween={50}
    //     slidesPerView={4}
    //     onSlideChange={() => console.log("slide change")}
    //     onSwiper={(swiper) => console.log(swiper)}
    //     navigation={true}
    //     autoplay={{
    //       delay: 2000,
    //       disableOnInteraction: false,
    //     }}
    //     modules={[Autoplay, Pagination, Navigation]}
    //   >
    //     {detail1.map((element, key) => (
    //       <SwiperSlide key={key}>
    //         {" "}
    //         {/* Adding key prop here */}
    //         <FoodCard
    //           images={element.src}
    //           head={element.name}
    //           summary={element.details}
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default Swiper2;
