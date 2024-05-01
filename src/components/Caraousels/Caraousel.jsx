import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; 
import style from "./caraousel.module.css"
import { useParams } from "react-router-dom";
import jsonData from "../../Caraousel.json"

function Caraousel() {

  const  ID  = useParams();
  const data = parseInt(ID.id)
  const packData = jsonData.filter((item) => item.ID == parseInt(data));
  const Pack = packData.length > 0 ? packData[0] : null;


  
  const [items, setItems] = useState([
    {
      id: 1,
      backgroundImage: Pack.images.ima1,
      title: Pack.Packname,
      description:Pack.description,
    },
    {
      id: 2,
      backgroundImage: Pack.images.ima1,
      title: Pack.Packname,
      description:Pack.description,
    },
    {
      id: 3,
      backgroundImage: Pack.images.ima1,
      title: Pack.Packname,
      description:Pack.description,
    },
    {
      id: 4,
      backgroundImage: Pack.images.ima1,
      title: Pack.Packname,
      description:Pack.description,
    },
    {
      id: 5,
      backgroundImage: Pack.images.ima1,
      title: Pack.Packname,
      description:Pack.description,
    },

  ]);


  const activate = (e) => {
    const slider = document.querySelector(".slider");
    const itemsCopy = [...items];
    if (e.target.matches(".next")) {
      const firstItem = itemsCopy.shift();
      setItems([...itemsCopy, firstItem]);
    } else if (e.target.matches(".prev")) {
      const lastItem = itemsCopy.pop();
      setItems([lastItem, ...itemsCopy]);
    }
  };

  return (
    <div className={style.caru}>
      <div className={style.main}>
        <ul className={style.slider}>
          {items.map((item) => (
            <li
              key={item.id}
              className={style.item}
              style={{
                backgroundImage:`url("${process.env.PUBLIC_URL+item.backgroundImage}")`
              }}
            >
              <div className={style.content}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.title}>{item.description}</p>
                <button>Book Now</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className={style.nav}>
          <IonIcon
            className={`${style.btn} prev`}
            name="arrow-back-outline"
            onClick={activate}
          ></IonIcon>
          <IonIcon
            className={`${style.btn} next`}
            name="arrow-forward-outline"
            onClick={activate}
          ></IonIcon>
        </nav>
      </div>
    </div>
  );
}
export default Caraousel;
