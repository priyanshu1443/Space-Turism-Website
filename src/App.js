import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/CSS/Homepage.css";
import homedesktopbackground from "./assets/home/background-home-desktop.jpg";
import destinationdesktopbackground from "./assets/destination/background-destination-desktop.jpg";
import crewdesktopbackground from "./assets/crew/background-crew-desktop.jpg";
import technologydesktopbackground from "./assets/technology/background-technology-desktop.jpg";

import Navigation from "./Components/Navigation";
import Homepagedata from "./Components/Homepagedata"
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

function App() {
  const [changedata, setchangedata] = useState(0);

  const pathchange = () => {
    var pathname = window.location.pathname;
    pathname === "/" ? setchangedata(0) : pathname === "/destination" ? setchangedata(1) : pathname === "/crew" ? setchangedata(2) : setchangedata(3)
  }

  const backgroundimg = {
    backgroundImage: `url(${changedata === 0 ? homedesktopbackground : changedata === 1 ? destinationdesktopbackground : changedata === 2 ? crewdesktopbackground : technologydesktopbackground})`
  }

  return (
    <div id="homepage" style={backgroundimg} >
      <Navigation path={pathchange} changedata={changedata} />
      <Routes>
        <Route path="/" element={<Homepagedata paths={pathchange} changedata={changedata} />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
