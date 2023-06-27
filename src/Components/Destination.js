import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import "../assets/CSS/Destination.css"

function Destination() {
  const [destination, setdestination] = useState(0);
  const imgarry = [moon, mars, europa, titan]

  var destination_names = document.getElementsByClassName('destination_names');
  var destination_names_highlight = document.getElementsByClassName('destination_names_highlight');


  const setstates = (n) => {
    destination_names[destination].classList.remove('active');
    destination_names_highlight[destination].classList.remove('active');
    destination_names[n].classList.add('active');
    destination_names_highlight[n].classList.add('active');
    destination_names_highlight[destination].style.background = 'transparent';
    setdestination(n);
  }

  const mouseover = (n) => {
    if (n !== destination) destination_names_highlight[n].style.background = "#979797";
  }

  const mouseleave = (n) => {
    n === destination ? destination_names_highlight[n].style.background = '#fff' : destination_names_highlight[n].style.background = 'transparent';
  }

  return (
    <div id="destination">
      <div>
        <div id="heading">
          <span>01</span>
          <span>Pick your destination</span>
        </div>
        <div id="imgdiv">
          <img src={imgarry[destination]} alt="" />
        </div>
      </div>
      <div >
        <div id="destination_nav">
          <ul>
            <li>
              <span className="active destination_names" onClick={() => { setstates(0); }} onMouseEnter={() => { mouseover(0) }} onMouseLeave={() => { mouseleave(0) }}>{data.destinations[0].name}</span>
              <hr className="active destination_names_highlight" />
            </li>
            <li>
              <span className="destination_names" onClick={() => { setstates(1); }} onMouseEnter={() => { mouseover(1) }} onMouseLeave={() => { mouseleave(1) }}>{data.destinations[1].name}</span>
              <hr className="destination_names_highlight" />
            </li>
            <li>
              <span className="destination_names" onClick={() => { setstates(2); }} onMouseEnter={() => { mouseover(2) }} onMouseLeave={() => { mouseleave(2) }}>{data.destinations[2].name}</span>
              <hr className="destination_names_highlight" />
            </li>
            <li>
              <span className="destination_names" onClick={() => { setstates(3) }} onMouseEnter={() => { mouseover(3) }} onMouseLeave={() => { mouseleave(3) }}>{data.destinations[3].name}</span>
              <hr className="destination_names_highlight" />
            </li>
          </ul>
        </div>
        <h1 id="destination_name">{data.destinations[destination].name}</h1>
        <p id="destination_description">{data.destinations[destination].description}</p>
        <hr />
        <div id="distace_time">
          <div id="distance">
            <p>Avg. Distance</p>
            <p>{data.destinations[destination].distance}</p>
          </div>
          <div id="time">
            <p>Est. travel time</p>
            <p>{data.destinations[destination].travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;