
import React from 'react';
import Card from '../Card/Card'
import './imagebox.css'; // Import CSS file

const ImageBox = () => {
    return (
        <div className="image-box-container">
            <h1 align='center'>Recovery Stories</h1>
            <div className="grid-container">
                <Card />
                <Card />
                <Card />
            </div>

            <button className="bottom-button">More Recovery Stories</button>
        </div>
    );
};

export default ImageBox;
