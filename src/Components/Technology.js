import React from "react";
import { useState } from "react";
import '../assets/CSS/Technology.css'
import data from "../assets/data.json";
import pti1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import pti2 from "../assets/technology/image-spaceport-portrait.jpg";
import pti3 from "../assets/technology/image-space-capsule-portrait.jpg";

import lti1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import lti2 from "../assets/technology/image-spaceport-landscape.jpg";
import lti3 from "../assets/technology/image-space-capsule-landscape.jpg";

export default function Technology() {
  const [tech, settech] = useState(0);

  const pimages = [pti1, pti2, pti3];
  const limages = [lti1, lti2, lti3];

  const activetech = document.getElementsByClassName('activetech');

  const selecttech = (n) => {
    activetech[tech].classList.remove('active');
    settech(n)
    activetech[n].classList.add('active')
  }
  return (
    <div id="technology">
      <div>
        <div id="heading">
          <span>03</span>
          <span>Space launch 101</span>
        </div>
        <div id="details">
          <div id="active_technology">
            <div className="activetech active" onClick={() => { selecttech(0) }}>1</div>
            <div className="activetech " onClick={() => { selecttech(1) }}>2</div>
            <div className="activetech " onClick={() => { selecttech(2) }}>3</div>
          </div>
          <div>
            <span>THE TERMINOLOGY…</span>
            <h1>{data.technology[tech].name}</h1>
            <p>{data.technology[tech].description}</p>
          </div>
        </div>
      </div>
      <div id="imgdiv" style={{ backgroundImage: `url(${window.innerWidth >= 800 ? pimages[tech] : limages[tech]})` }}></div>
    </div>
  )
}