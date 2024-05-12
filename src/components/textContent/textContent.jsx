import React from "react";
import './textContent.css';

export default function TextContent({ value }) {
    return (
        <div className="slide-text-content-container">
            {value.map((text, index) => (
                <p key={index} className="slide-text-content">{text}</p>
            ))}
        </div>
    )
}