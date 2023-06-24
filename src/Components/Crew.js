import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import c1 from "../assets/crew/image-douglas-hurley.png";
import c2 from "../assets/crew/image-mark-shuttleworth.png";
import c3 from "../assets/crew/image-victor-glover.png";
import c4 from "../assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  const [crew, setcrew] = useState(0)

  const imgages = [c1, c2, c3, c4]

  return (
    <div style={{ color: "white" }}>
      <div>
        <div>
          <span>02</span>
          <p>Meet your crew</p>
        </div>
        <div>
          <p>{data.crew[crew].role}</p>
          <p>{data.crew[crew].name}</p>
          <p>{data.crew[crew].bio}</p>
        </div>
        <div>
          <div onClick={() => { setcrew(0) }}>1</div>
          <div onClick={() => { setcrew(1) }}>2</div>
          <div onClick={() => { setcrew(2) }}>3</div>
          <div onClick={() => { setcrew(3) }}>4</div>
        </div>
      </div>
      <div>
        <img src={imgages[crew]} alt="" />
      </div>
    </div>
  )
}