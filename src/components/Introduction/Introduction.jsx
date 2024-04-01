/** @format */

import React from "react";
import "./Introduction.css";
const Introduction = () => {
  return (
    <div  className="introduction_main_container">
    <div className="introduction_container">
      <div className="introduction_left">
        <h1>Healing Starts At Home</h1>
        <div className="introduction_text"> We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</div>
        <div className="introduction_button">
        <button className="bottom-button-btn btn" >Book an appointment</button>
        <div className="introduction_btn_number">
                <button className="introduction_call_btn">
                  <img
                    className="introduction_call_logo"
                    alt=""
                    src="/iconlyboldcalling@2x.png"
                  />
                </button>
              <div className="introduction_call_number" >
              <p>24H Care</p>
              <p>0900-78601</p>
          </div>
        </div>
        </div>
      </div>
      <div className="introduction_right">
      <img
          className='introduction_image'
          loading="lazy"
          alt=""
          src="/image-15@2x.png"
        />
      </div>
    </div>
    <div className='introduction_lower'>
        <div className='introduction_lower_title'>
        <h2>About Care At Home</h2>
        </div>
        <div className='introduction_lower_text'>
                <p>Care at Home is a trusted partner in promoting well-being, ensuring that quality
healthcare is always within reach. Our care doesn’t end at the hospital exit. We continue
to give you the best care.....</p>
<div className="introduction_read_more2">
                    <div className="">Read More</div>
                    <img
                      className="introduction_arrorw"
                      alt=""
                      src="/iconlylightoutlinearrow--right-circle@2x.png"
                    />
                  </div>
            </div>
    </div>
    </div>
  );
};

export default Introduction;
