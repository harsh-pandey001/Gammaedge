import React, { useEffect } from "react";
import style from "./Food.module.css";
import { useNavigate } from "react-router-dom";
const Food = (props) => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.showalert("Login to access all features", "info");
      history("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      
      <div className={style.container}>
        <h1>Fomous Food in Indore</h1>
        <h3>You can search it by Category</h3>

        {/* <div className={`sliderStateSearch col-md-7 `}>
          <input
            style={{color:"#fff"}}
            type="search"
            className="searchField form-control"
        
            placeholder="I want to make..."
            value=""
            name="s"
            id="keyword"
            onkeyup="fetch()"
          />
        </div> */}
        <div className="sliderStateSelect selectCategories col-md-4 ">
          <select name="mt-listing-category2" className={style.formControl}>
            <option value="">Categories</option>
            <option value="burgers">Burgers</option>
            <option value="drinks">Drinks</option>
            <option value="pizzas">Pizzas</option>
            <option value="salads">Salads</option>
            <option value="seafood">Seafood</option>
            <option value="sweets">Sweets</option>
          </select>
        </div>
        <div className="sliderStateSubmit col-md-1  submit">
          <button type="submit" className="form-control btn btn-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Food;
