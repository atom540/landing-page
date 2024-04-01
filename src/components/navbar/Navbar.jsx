import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar_container'>
        <div className='Navbar_title'>
            <h1>Care at home</h1>
        </div>
        <div className='Navbar_title'>
        <img
            className="navbar_logo"
            loading="lazy"
            alt=""
            src="/group-1000001134.svg"
          />
        </div>
        <button className="bottom-button-btn" >Request a call back</button>

      
    </div>
  )
}

export default Navbar
