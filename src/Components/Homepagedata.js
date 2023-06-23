import React from "react";
import { Link } from "react-router-dom";

import "../assets/CSS/Homepage.css";

function Homepagedata(props) {

  return (
    <div id="homepagedata">
      <section >
        <span>So, you want to travel to</span>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </section>

      <div >
        <div onClick={() => { props.paths() }} >
          <Link to="./destination" className="link">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepagedata;