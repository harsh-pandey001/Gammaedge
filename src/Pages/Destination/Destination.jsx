import React, { useState } from "react";
import beach from "../../assets/beach.jpg";
import resort from "../../assets/resort.jpg";
import camp from "../../assets/camp.jpg";
import mountain from "../../assets/mountain.jpg";
import gulp from "../../assets/gulp.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";



const items = [
  {
    src: resort,
    altText: "Slide 1",
    caption: "Resorts"
  },
  {
    src: gulp,
    altText: "Slide 2",
    caption: "Rock Climbing"
  },
  {
    src: camp,
    altText: "Slide 3",
    caption: "Camping"
  },
  {
    src: beach,
    altText: "Slide 4",
    caption: "Beach"
  },
  {
    src: mountain,
    altText: "Slide 5",
    caption: "Mountain Climbing"
  }
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

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="img-carousel" />
      <CarouselCaption
        captionText={item.altText}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
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
  );
};

export default Destination;
