import React from "react";
import logo from "../assets/shared/logo.svg"
import '../assets/CSS/Navigation.css'
import { useState } from "react";

function Navigation() {
  const [select, setselect] = useState(0);

  const element1 = document.getElementsByClassName("selected");

  const change_page = (n) => {
    element1[select].style.background = "transparent";
    element1[n].style.background = "white";
    setselect(n);
  }

  const mouseover = (n) => {
    if (select !== n) element1[n].style.background = "#979797";
  }
  const mouseleave = (n) => {
    select === n ? element1[n].style.background = "white" : element1[n].style.background = "transparent";
  }

  return (
    <div id="navigation" >
      <nav>
        <div className="logodiv">
          <img src={logo} alt="logo" />
        </div>
        <hr />
        <div className="navitems">
          <div> <hr /> </div>
          <div>
            <ul>
              <li>
                <span onClick={() => (change_page(0))} onMouseEnter={() => { mouseover(0) }} onMouseLeave={() => { mouseleave(0) }}><span className="nav_number">01</span>Home</span>
                <p className="selected" style={{ background: "white" }}></p>
              </li>
              <li>
                <span onClick={() => (change_page(1))} onMouseEnter={() => { mouseover(1) }} onMouseLeave={() => { mouseleave(1) }}><span className="nav_number">02</span>Destination</span>
                <p className="selected"></p>
              </li>
              <li>
                <span onClick={() => (change_page(2))} onMouseEnter={() => { mouseover(2) }} onMouseLeave={() => { mouseleave(2) }}><span className="nav_number">03</span>Crew</span>
                <p className="selected"></p>
              </li>
              <li>
                <span onClick={() => (change_page(3))} onMouseEnter={() => { mouseover(3) }} onMouseLeave={() => { mouseleave(3) }}><span className="nav_number">04</span>Technology</span>
                <p className="selected"></p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;