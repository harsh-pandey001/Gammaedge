import React, { useEffect, useState } from "react";
import beach from "../../assets/Destination4.jpg";
import resort from "../../assets/Destination1.png";
import camp from "../../assets/Destination3.png";
import mountain from "../../assets/Destination6.jpg";
import gulp from "../../assets/Destination5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import style from "./destination.module.css";

const items = [
  {
    src: resort,
    // altText: "Slide 1",
    caption: "Crecent Waterpark",
  },
  {
    src: gulp,
    // altText: "Slide 2",
    caption: "Patalpani",
  },
  {
    src: camp,
    altText: "Slide 3",
    caption: "Chhatri Bagh",
  },
  {
    src: beach,
    altText: "Slide 4",
    caption: " ",
  },
  {
    src: mountain,
    altText: "Slide 5",
    caption: "Maheshwar",
  },
];

const Destination = (props) => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.showalert("Login to access all features", "info");
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="img-carousel" />
      <CarouselCaption
        // captionText={item.altText}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <>
      <h1 style={{ margin: "auto", display: "flex" }}>Destinations</h1>
      {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel> */}
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((element, key) => (
          <SwiperSlide>
            <div key={key} className={style.container}>
              <div  className={style.left}>
                <span>Harsh</span>
                <h1>{element.caption}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  aut, commodi hic repudiandae mollitia quaerat laboriosam
                  aliquam, quibusdam illo fuga blanditiis placeat?
                </p>
              </div>
              <div className={style.right}>
                <img
                  src={element.src}
                  alt={element.altText}
                  className="img-carousel"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Destination;
