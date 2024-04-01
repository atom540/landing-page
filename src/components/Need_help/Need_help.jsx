import React from 'react'
import './Need_help.css'
const Need_help = () => {
  return (
    <div className="need_help_container">
        <div className="need_help_left">
            <div className="need_help_heading">
                <h2>We provide information, resources, and treatment for people battling addiction and related conditions.</h2>
            </div>
            <div className="need_help_Qn">
                <h3>Need addiction help?</h3>
                <p>Call the Advanced Recovery Systems 24/7 confidential</p>
            </div>
            <div className="need_help_btn">
            <div className="need_help_number">6745763733</div>
            <button className="need_help_call">
                  <img
                    className="need_help_call_image"
                    alt=""
                    src="/iconlylightoutlinecall@2x.png"
                  />
                  <div className="">Call Now</div>
                </button>
            </div>
        </div>
        <div className="need_help_right">
        <img
              className="need_help_right_img"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className="need_help_frame"></div>
        </div>

      
    </div>
  )
}

export default Need_help
