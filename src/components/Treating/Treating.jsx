import React from 'react'
import './Treating.css'
const Treating = () => {
  return (
    <div className='treating_container'>
         <div className="treating_left">
        <div className='treating_title'>
            <h2>Treating the Underlying Causes of Addiction</h2>
        </div>
        <div className='treating_description'>
            <p>People turn to substances of abuse for quick highs, to relieve stress or to cope with other health conditions. But alcohol and other drugs exacerbate symptoms of co-occurring mental health disorders. We teach healthy ways to cope with unpleasant emotions, and we treat all of the underlying causes of addiction.</p>
        </div>
        <div className="treating_btn">
                <p>More on Co-Occurring Disorders</p>
            </div>
        </div>
        <div className="treating_right">
        <img
                className="treating_right_image"
                loading="lazy"
                alt=""
                src="/rectangle-688@2x.png"
              />
               <div className="treating_frame"></div>
        </div>
      
    </div>
  )
}

export default Treating
