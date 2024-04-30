import React from "react";
import style from "./packcard.module.css";
import img1 from "../../assets/Destination3.png"
import data from "./../../Caraousel.json"
import { Link } from "react-router-dom";

const PackCard = (props) => {
  return (
    <div>
      <section className={style.wrapper}>
        <div className={style.containerFostrap}>
          <div className="content">
            <div className="container">
              <div className="row">
                {
                  data.map((element,key)=>(
                    <div className="col-xs-12 col-sm-4">
                    <div className={style.card}>
                      <a className={style.imgCard} href="/">
                        <img src={img1} />
                      </a>
                      <div className={style.cardContent}>
                        <h4 className={style.cardTitle}>
                          <Link to={`/packagedetails/id:${element.ID}`}>{element.Packname}</Link>
                        </h4>
                        <div>
                        <p className="">
                        {element.description}
                        </p>
                        <p className="">
                         {element.price} /- only
                        </p>
                        </div>
                      </div>
                      <div className={style.cardReadMore}>
                        <Link to={`/packagedetails/id:${element.ID}`} className="btn btn-link btn-block">
                          Buy
                        </Link>
                      </div>
                    </div>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackCard;
