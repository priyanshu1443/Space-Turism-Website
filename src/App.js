import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/CSS/Homepage.css";

// desktop img import 
import homedb from "./assets/home/background-home-desktop.jpg";
import destinationdb from "./assets/destination/background-destination-desktop.jpg";
import crewdb from "./assets/crew/background-crew-desktop.jpg";
import technologydb from "./assets/technology/background-technology-desktop.jpg";

// tablet img import 
import hometb from "./assets/home/background-home-tablet.jpg";
import destinationtb from "./assets/destination/background-destination-tablet.jpg";
import crewtb from "./assets/crew/background-crew-tablet.jpg";
import technologytb from "./assets/technology/background-technology-tablet.jpg";

// components import 
import Navigation from "./Components/Navigation";
import Homepagedata from "./Components/Homepagedata"
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

function App() {
  const [changedata, setchangedata] = useState(0);

  const desktopbackground = [homedb, destinationdb, crewdb, technologydb]
  const tabletbackground = [hometb, destinationtb, crewtb, technologytb]

  const pathchange = () => {
    var pathname = window.location.pathname;
    pathname === "/" ? setchangedata(0) : pathname === "/destination" ? setchangedata(1) : pathname === "/crew" ? setchangedata(2) : setchangedata(3)
  }

  const backgroundimg = {
    backgroundImage: `url(${window.innerWidth >= 800 ? desktopbackground[changedata] : tabletbackground[changedata]
      })`
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
