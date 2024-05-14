import React from "react";
import './slideTitle.css';

export default function SlideTitle({ value, changeSlide }) {

    return (
        <div className="slide-title-container">
            <h1 className="slide-title" onClick={changeSlide}>{value}</h1>
        </div>
    )
}