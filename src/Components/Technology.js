import React from "react";
import { useState } from "react";
import '../assets/CSS/Technology.css'
import data from "../assets/data.json";
import ti1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import ti2 from "../assets/technology/image-spaceport-portrait.jpg";
import ti3 from "../assets/technology/image-space-capsule-portrait.jpg";

export default function Technology() {
  const [tech, settech] = useState(0);

  const images = [ti1, ti2, ti3];

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
      <div id="imgdiv">
        <img src={images[tech]} alt="" />
      </div>
    </div>
  )
}