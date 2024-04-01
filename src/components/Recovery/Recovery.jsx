import React from 'react'
import './Recovery.css'
const Recovery = () => {
  return (
    <div className="Recovery_container">
        <div className="Recovery_left"> 
            <div className="Recovery_right_title">
                <h2>Find Your Path to Recovery</h2>
            </div>
            <div className="Recovery_description">
                <p>Rehab for alcohol  requires a personal approach. It should be tailored to your needs.
We work with you to create a personalized treatment plan that includes individual therapy,
counselling, group therapy and medication-assisted treatment options.</p>
            </div>
            <div className="Recover_btn">
                <p>Learn More About Treatment</p>
            </div>
        </div>
        <div className="Recovery_right"> 
        <img
          className="Recovery_image"
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
        </div>

    </div>
  )
}

export default Recovery
