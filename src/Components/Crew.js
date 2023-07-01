import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import c1 from "../assets/crew/image-douglas-hurley.png";
import c2 from "../assets/crew/image-mark-shuttleworth.png";
import c3 from "../assets/crew/image-victor-glover.png";
import c4 from "../assets/crew/image-anousheh-ansari.png";
import "../assets/CSS/Crew.css";

export default function Crew() {
  const [crew, setcrew] = useState(0);

  const imgages = [c1, c2, c3, c4];

  const crews = document.getElementsByClassName('crews');

  const showcrew = (n) => {
    crews[crew].classList.remove('active');
    setcrew(n);
    crews[n].classList.add('active');
  }

  return (
    <div id="crew">
      <div id="crew_details">
        <div>
          <span>02</span>
          <span>Meet your crew</span>
        </div>
        <div>
          <p id="crew_role">{data.crew[crew].role}</p>
          <p id="crew_name">{data.crew[crew].name}</p>
          <p id="crew_bio">{data.crew[crew].bio}</p>
        </div>
        <div>
          <span className="crews active" onClick={() => { showcrew(0) }}></span>
          <span className="crews " onClick={() => { showcrew(1) }}></span>
          <span className="crews " onClick={() => { showcrew(2) }}></span>
          <span className="crews " onClick={() => { showcrew(3) }}></span>
        </div>
      </div>
      <div id="crew_img" style={{ backgroundImage: `url(${imgages[crew]})` }}></div>
    </div>
  )
}