import React from "react";

import { Meditate } from "../../assets";

import "./abstract.styles.css";

const Abstract = () => {
  return (
    <div className="abstract-section">
      <div className="quote-1">
        <p>
          There is <b>hope</b> when your <b>brain</b> tell&lsquo;s you there isn&lsquo;t
        </p>
      </div>
      <img className="med-image" src={Meditate} alt="" />
 
    </div>
  );
};

export default Abstract;
