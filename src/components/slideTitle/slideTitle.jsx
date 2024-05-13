import React from "react";
import './slideTitle.css';

export default function SlideTitle({ value }) {
    const handleClick = (e) => {
        console.log(e.target);
    };
    return (
        <div className="slide-title-container" onClick={handleClick}>
            <h1 className="slide-title">{value}</h1>
        </div>
    )
}