
import React from 'react';
import img1 from '../image/imageboximage.png'
function Card() {
    return (
        <div className="card">

            <div className="card-body">
                <img src={img1} alt="Logo" />
            </div>
            <div className="card-top">
                <h1>Title</h1>
            </div>
        </div>
    );
}

export default Card;
