import React, { useState } from "react";
import beach from "../../assets/Destination4.jpg";
import resort from "../../assets/Destination1.png";
import camp from "../../assets/Destination3.png";
import mountain from "../../assets/Destination6.jpg";
import gulp from "../../assets/Destination5.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";



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
    caption: "Mountain Climbing",
  },
];

const Destination = () => {
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
      <h1 style={{margin:"auto", display:"flex"}}>Destinations</h1>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
      </Carousel>
    </>
  );
};

export default Destination;
