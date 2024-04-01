import React from 'react'
import './Box2.css'
const Box2 = () => {
  return (
    <div className="box2_conatiner">
        <div className="box2_left_container">
            <div className="box2_right_container_title">
                <h2>All Your Needs at Your Fingertips</h2>
            </div>
            <div className="box2_left_description">
                <p>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.</p>
            </div>
        </div>
        <div className="box2_right_container">
        <img
        className="box2_right_image"
        loading="lazy"
        alt=""
        src="/image-37@2x.png"
      />
        </div>
      
    </div>
  )
}

export default Box2
