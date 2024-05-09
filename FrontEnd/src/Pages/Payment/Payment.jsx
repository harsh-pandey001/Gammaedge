import React from "react";
import dest from "../Destination/destination.module.css";
import Qr from "../../assets/QRS/QR.jpeg";

const Payment = (props) => {
  return (
    <div>
      <h1 className={dest.head}>
        Pay Your amount by Scanning the QR & <br /> keep the receipt with you
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "250px", height: "250px" }} src={Qr} alt="" />
      </div>
    </div>
  );
};

export default Payment;
