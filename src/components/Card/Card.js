import React from 'react'
import image from '../image/imageboximage.png'
import './card.css'
const Card = () => {
  return (
    <div className='card_container'>
        <div className='card_image'>
            <img src={image} className='card_image'></img>
        </div>
        <div className='card_title'><h3>Title</h3></div>

    </div>
  )
}

export default Card
