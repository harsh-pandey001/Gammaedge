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
import List from "./Pages/list/List";
import Turf from "./Pages/Turf/Turf";

function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/turfs" element = {<List/>}/>
    <Route path = "/Turf:id" element = {<Turf/>}/>
  </Routes>
  </BrowserRouter>
  </>)
}

export default App;