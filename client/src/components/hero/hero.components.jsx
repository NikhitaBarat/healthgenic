import React from "react";


// assets
import { YogaPeople } from "../../assets";

// styles
import './hero.styles.css';

const Hero = () => {
  return (
    <div className="hero-component">
      <div className="hero-left">
        <h1>Mental Wellness<br/> From Research to<br/> Remedy.</h1>
        <div className="analyse-btn">
            <p>Analyse</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={YogaPeople} alt="" />
      </div>
    </div>
  );
};

export default Hero;
