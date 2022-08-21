import React from "react";
import { Therapy } from "../../assets";

import './featuredtherapy.styles.css'

const Featuredtherapy = () => {
  return (
    <div className="featured-therapy">
      <div className="therapy-left">
        <img src={Therapy} alt="" />
      </div>
      <div className="therapy-right">
        <h1>Therapy when you need it</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Featuredtherapy;
