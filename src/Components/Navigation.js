import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hamburgurmenu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";


import '../assets/CSS/Navigation.css'

import logo from "../assets/shared/logo.svg"

function Navigation(props) {
  const [select, setselect] = useState(0);


  const navmenu = (n) => {
    navitems[0].style.display = `${n === 1 ? 'block' : 'none'}`;
    document.getElementById('hamburgur').style.display = `${n === 1 ? 'none' : 'block'}`;
    document.getElementById('close').style.display = `${n === 1 ? 'block' : 'none'}`;
  }

  window.onresize = () => {
    if (window.innerWidth < 490) {
      if (window.innerWidth >= 481) {
        navitems[0].style.display = 'block';
        document.getElementById('hamburgur').style.display = "none"
        document.getElementById('close').style.display = "none"
      } else {
        navmenu(0);
      }
    }
  }

  const change_page = (n) => {
    element1[select].style.background = "transparent";
    element1[n].style.background = "white";
    setselect(n);
    props.path()
    if (window.innerWidth < 481) { navmenu(0) };
  }
  useEffect(() => {
    if (props.changedata === 1) change_page(1);
  }, [props.changedata])


  const element1 = document.getElementsByClassName("selected");
  const navitems = document.getElementsByClassName("navitems");

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
        <img id="hamburgur" onClick={() => (navmenu(1))} src={`${hamburgurmenu}`} alt="" />
        <img id="close" onClick={() => (navmenu(0))} src={`${close}`} alt="" />
        <div className="navitems">
          <div> <hr /> </div>
          <div>
            <ul>
              <li>
                <span onClick={() => (change_page(0))} onMouseEnter={() => { mouseover(0) }} onMouseLeave={() => { mouseleave(0) }}><span className="nav_number">01</span><Link to="./" className="link">Home</Link></span>
                <p className="selected" style={{ background: "white" }}></p>
              </li>
              <li>
                <span onClick={() => (change_page(1))} onMouseEnter={() => { mouseover(1) }} onMouseLeave={() => { mouseleave(1) }}><span className="nav_number">02</span><Link to="./destination" className="link">Destination</Link></span>
                <p className="selected"></p>
              </li>
              <li>
                <span onClick={() => (change_page(2))} onMouseEnter={() => { mouseover(2) }} onMouseLeave={() => { mouseleave(2) }}><span className="nav_number">03</span><Link to="./crew" className="link">Crew</Link></span>
                <p className="selected"></p>
              </li>
              <li>
                <span onClick={() => (change_page(3))} onMouseEnter={() => { mouseover(3) }} onMouseLeave={() => { mouseleave(3) }}><span className="nav_number">04</span><Link to="./technology" className="link">Technology</Link></span>
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