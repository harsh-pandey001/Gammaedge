import React from "react";
import style from "./foodcard.module.css";
import img from "../../../assets/demoimg.jpg";


const FoodCard = (props) => {
  
  return (<>
    <div className={style.container}>
      <div className={style.imgContainer}><img src={props.images} alt="" /></div>
      <h2>{props.head}</h2>
      <p>{props.summary}</p>
    </div>
   
    </>

  );
};

export default FoodCard;
