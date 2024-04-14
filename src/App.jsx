import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "../src/components/Shared/navbar/Navbar"
import Signup from "./Pages/Credentials/Signup/Signup";
import Login from "./Pages/Credentials/Login/Login";
import Food from "./Pages/Food/Food";
import Destination from "./Pages/Destination/Destination";
import Packages from "./Pages/Packages/Packages";


function App() {
  return (
    <>
    {/* <Signup/> */}
    {/* <Login/> */}
      <BrowserRouter>
        <Navbar/>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/sign" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
