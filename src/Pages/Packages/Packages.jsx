import React, { useState, useEffect } from "react";
import style from "./packages.module.css";
import { useNavigate } from "react-router-dom";
import PackCard from "../../components/Packages/PackCard";
import Caraousel from "../../components/Caraousels/Caraousel";



const Packages = (props) => {
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
      {/* <PackCard /> */}
      <Caraousel/>
    </>
  );
};

export default Packages;
