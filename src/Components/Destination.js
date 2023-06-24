import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

function Destination() {
  const [destination, setdestination] = useState(0)

  const imgarry = [moon, mars, europa, titan]

  return (
    <div style={{ color: "white" }}>
      <div>
        <div>
          <span>01</span>
          <p>Pick your destination</p>
        </div>
        <img src={imgarry[destination]} alt="" />
      </div>
      <div>
        <div>
          <span onClick={() => { setdestination(0) }}>{data.destinations[0].name}</span>
          <span onClick={() => { setdestination(1) }}>{data.destinations[1].name}</span>
          <span onClick={() => { setdestination(2) }}>{data.destinations[2].name}</span>
          <span onClick={() => { setdestination(3) }}>{data.destinations[3].name}</span>
        </div>
        <h1>{data.destinations[destination].name}</h1>
        <p>{data.destinations[destination].description}</p>
        <hr />
        <div>
          <div>
            <p>Avg. Distance</p>
            <p>{data.destinations[destination].distance}</p>
          </div>
          <div>
            <p>Est. travel time</p>
            <p>{data.destinations[destination].travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;