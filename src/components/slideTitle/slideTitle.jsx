import React from "react";
import './slideTitle.css';

export default function SlideTitle({ value }) {

    return (
        <div className="slide-title-container">
            <h1 className="slide-title">{value}</h1>
        </div>
    )
}