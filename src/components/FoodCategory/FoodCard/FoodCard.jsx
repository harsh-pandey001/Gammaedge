import React from "react";
import style from "./foodcard.module.css";
import img from "../../../assets/demoimg.jpg";

const FoodCard = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}><img src={img} alt="" /></div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export default FoodCard;
