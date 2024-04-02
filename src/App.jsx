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

function App() {
  return (
    <>
    <Signup/>
    {/* <Login/> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
