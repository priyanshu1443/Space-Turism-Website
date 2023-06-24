import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import ti1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import ti2 from "../assets/technology/image-spaceport-portrait.jpg";
import ti3 from "../assets/technology/image-space-capsule-portrait.jpg";

export default function Technology() {
  const [tech, settech] = useState(0);

  const images = [ti1, ti2, ti3];

  return (
    <div style={{ color: "white" }}>
      <div>
        <div>
          <span>03</span>
          <p>Space launch 101</p>
        </div>
        <div>
          <div>
            <div onClick={() => { settech(0) }}>1</div>
            <div onClick={() => { settech(1) }}>2</div>
            <div onClick={() => { settech(2) }}>3</div>
          </div>
          <div>
            <span>THE TERMINOLOGY…</span>
            <h1>{data.technology[tech].name}</h1>
            <p>{data.technology[tech].description}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={images[tech]} alt="" />
      </div>
    </div>
  )
}