import React from 'react'
import './Box.css'
const Box = () => {
  return (
    <div className='Box_container'>

        <div className='Box_title'>
        <h2>Understand Addiction and it’s Causes</h2>
        </div>
        <div className='Box_description'>
            <p>You must understand alcohol or drug addiction and their causes before you can overcome them. The factors that lead to substance abuse and addiction are different for each person. We explain
how drugs affect your body, the reasons people turn to them and how to recover from alcoholism and other substance use disorders.</p>
        </div>

        <div className="inner_box">
            <div className="inner_box_title">
                <h3>Alcohol Addiction</h3>
            </div>
            <div className="inner_box_dexcription">
               <p>Alcohol is the most widely consumed substance in India, and it’s
one of the most addictive and dangerous. Discover the facts about Alcohol Addiction.</p>
            </div>
            
            <div className="introduction_read_more">
                    <div className="">Learn More</div>
                    <img
                      className="introduction_arrorw"
                      alt=""
                      src="/iconlylightoutlinearrow--right-circle@2x.png"
                    />
                  </div>
        </div>

      
    </div>
  )
}

export default Box
