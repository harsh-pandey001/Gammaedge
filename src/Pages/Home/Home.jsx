import React, { useEffect } from "react";
import "../../App.css";
import style from "./home.module.css";

import img from "../../assets/homeSlide/Gandhihall.jpeg";
import img3 from "../../assets/Destination3.png";
import img4 from "../../assets/homeSlide/sarafa_bazar.jpeg";
import img5 from "../../assets/homeSlide/TournadoWaterpark.jpeg";
import mahakal from "../../assets/homeSlide/Mahakaleswar.jpeg"
import anna from "../../assets/homeSlide/Annapurna.jpeg"
import tincha from "../../assets/homeSlide/tincha_fall.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import FoodCard from "../../components/FoodCategory/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";

const detail1 = [
  {
    src: img,
    name: "Gandhi Hall",
    details:
      "Gandhi Hall is a prime example of British influence on Indian architecture in Indore.",
  },
  {
    src: mahakal,
    name: "Mahakaleshwar Ujjain",
    details:
      "The idol of Mahakaleshwar is known to be dakshinamurti, facing the South. This is a unique feature, upheld by tantric tradition to be found only in Mahakaleshwar among the 12 jyotirlingas. ",
  },
  {
    src: img3,
    name: "Chhatri bagh",
    details:
      "One of the major attractions of the city, Chhatri Bagh houses chhatris or cenotaphs that are memorial canopies built in the memory of the Holkar rulers. ",
  },
  {
    src: img4,
    name: "Sharafa Bazar",
    details:
      "The Sarafa night market, or bazaar, is a wonderful & famous aspect of night life in Indore.",
  },
  {
    src: img5,
    name: "Tournado WaterPark",
    details:
      "With a reputation as a premier water park, Tornado Water Park & Resorts caters to a diverse audience seeking an escape from routine. ",
  },
  {
    src: tincha,
    name: "Tincha Waterfall",
    details:
      "The water flow is highest immediately after the rainy season (usually after July). It goes almost dry in the summer season, and the stream is reduced to a trickle.",
  },
  {
    src: anna,
    name: "Annapurna Mandir",
    details:
      "The Annapurna Temple, besides being a place for pilgrimages is also a tourist attraction. Dedicated to Goddess Annapurna,",
  },
];

const Home = (props) => {
  let history = useNavigate();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      props.showalert("Login to access all features", "info");
      history("/login");
    } else {
      history("/destination");
    }
  };

  return (
    <>
      <div>
        <main className="cover-page" id="hero">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>My Indore Guide</h1>
              <h3 style={{ color: "#ffffff" }}>Tours | Travel | Guide</h3>
              <button
                style={{ padding: "0.5rem 2.5rem", margin: "2rem 0" }}
                className="btn btn-outline-info"
                onClick={handleClick}
              >
                Explore More
              </button>
            </div>
          </section>
        </main>
        <div className={style.container}>
          <h2 className={style.head}>Explore Indore</h2>
          <p>These popular destinations have a lot to offer</p>
        </div>

        <div className={style.SwipperContainer}>
          <Swiper
            spaceBetween={70}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {detail1.map((elements, key) => (
              <SwiperSlide key={key}>
                <FoodCard
                  images={elements.src}
                  head={elements.name}
                  summary={elements.details}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
