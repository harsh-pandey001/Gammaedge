import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>)
}

export default App;