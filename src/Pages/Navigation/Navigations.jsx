import React from "react";
import dest from "../Destination/destination.module.css";
import GoogleMaps from "../../components/Shared/GoogleMap/GoogleMaps";

const Navigations = (props) => {
  return (
    <div>
      <h1 className={dest.head}>Your Destination</h1>
      <GoogleMaps latitude = {22.718055604414346} longitude = {75.85487157555893} />
    </div>
  );
};

export default Navigations;
