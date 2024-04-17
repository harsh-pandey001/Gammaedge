import React from "react";
import style from "./home.module.css";
import "../../App.css";
import Swiper2 from "../../components/home/swiper/Swiper2";
import Navbar from "../../components/Shared/navbar/Navbar";

// import { Button } from 'bootstrap'

const Home = () => {
  return (
    <>
      <div className={style.container}>
  
        <main className="cover-page" id="hero">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>My Indore Guide</h1>
              <h3>Tours | Travel | Guide</h3>
              <button className="btn btn-success">Explore More</button>
            </div>
          </section>
        </main>
        <div className={style.sectionDest}>
        <h2>Explore India</h2>
        <p>These popular destinations have a lot to offer</p>
        <Swiper2 /></div>
      </div>

    </>
  );
};

export default Home;
