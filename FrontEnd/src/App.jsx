import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "../src/components/Shared/navbar/Navbar";
import Signup from "./Pages/Credentials/Signup/Signup";
import Login from "./Pages/Credentials/Login/Login";
import Food from "./Pages/Food/Food";
import Destination from "./Pages/Destination/Destination";
import Packages from "./Pages/Packages/Packages";
import { useState } from "react";
import Alert from "./components/Shared/Alert/Alert";
import FoodCategory from "./Pages/FoodCategory/FoodCategory";
// import Maps from "./components/Shared/GoogleMap/Maps";
import Footer from "./components/Shared/Footer/Footer";
import PackageDetails from "./Pages/PackageDetails/PackageDetails";
import Navigations from "./Pages/Navigation/Navigations"
import Payment from "./Pages/Payment/Payment";

function App() {
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home />}  showalert={showalert}/>
          <Route path="/food" element={<Food showalert={showalert} />} />
          <Route
            path="/destination"
            element={<Destination showalert={showalert} />}
          />
          <Route
            path="/packages"
            element={<Packages showalert={showalert} />}
          />
          <Route path="/sign" element={<Signup showalert={showalert} />} />
          <Route path="/login" element={<Login showalert={showalert} />} />
          <Route path="/foodcategory" element={<FoodCategory />} />
          <Route path="/navigations" element={<Navigations />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/packagedetails/:id" element={<PackageDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
