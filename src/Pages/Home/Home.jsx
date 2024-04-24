import React from "react";
import "../../App.css";
import"./home.module.css";
import Swiper2 from "../../components/home/swiper/Swiper2";
import Navbar from "../../components/Shared/navbar/Navbar";
const Home = () => {
  return (
    <>
      <div>
        <main className="cover-page" id="hero">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>My Indore Guide</h1>
              <h3 style={{color:"#ffffff"}}>Tours | Travel | Guide</h3>
              <button  style={{  padding: "0.5rem 2.5rem", margin:"2rem 0"}}  className="btn btn-outline-info">Explore More</button>
            </div>
          </section>
        </main>
        <div className="sectionDest">
        <h2>Explore India</h2>
        <p>These popular destinations have a lot to offer</p>
        <Swiper2 /></div>
      </div>

    </>
  );
};

export default Home;
