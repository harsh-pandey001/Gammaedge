import React from "react";
import "../../App.css";
import style from "./home.module.css";
import Swiper2 from "../../components/home/swiper/Swiper2";
import img from "../../assets/Destination1.png";
import img2 from "../../assets/Destination2.jpg";
import img3 from "../../assets/Destination3.png";
import img4 from "../../assets/Destination4.jpg";
import img5 from "../../assets/Destination5.jpg";
import { Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import FoodCard from "../../components/FoodCategory/FoodCard/FoodCard";


const detail1 = [
  {
    src: img,
    name: "lorem ipsume",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor.",
  },
  {
    src: img2,
    name: "lorem ipsume",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor.",
  },
  {
    src: img3,
    name: "lorem ipsume",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor.",
  },
  {
    src: img4,
    name: "lorem ipsume",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor.",
  },
  {
    src: img5,
    name: "lorem ipsume",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor.",
  },
];

const Home = () => {
  console.log(detail1);
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

        {/* <div className={style.SwipperContainer}>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {detail1.map((element, key)=(
         <SwiperSlide>
          <FoodCard images = {element.src} head = {element.name}  summary =  {element.details}/>
         </SwiperSlide>
        ))}
          </Swiper>
        </div> */}

      </div>
    </>
  );
};

export default Home;
