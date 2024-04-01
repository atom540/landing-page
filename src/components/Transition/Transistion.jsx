import React from 'react'
import step from '../image/transition_step.png'
const Transistion = () => {
  return (
    <div  className="transition_container">
        <div className="transition_title">
            <h1>Effortless Onboarding: Your Smooth Transition to Excellence</h1>
        </div>
        <div className="transition_step_image">
            <img src={step} className="transition_step_image" ></img>
        </div>
       
            <button className="transition_step_btn bottom-button" >Start Booking</button>
        
      
    </div>
  )
}

export default Transistion
