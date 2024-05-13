import React from 'react';
import './changeSlide.css'; 
import { useSlideContext } from '../slideContext/slideContext';

const ChangeSlide = () => {
    const { value: slideValue } = useSlideContext();

    return (
        <div className="change-slide-container">
            <div className="change-slide-wrapper">
                <button className="change-slide">
                    Slide
                </button>
                <div className="slide-dropdown">
                    {slideValue.map((slide, index) => (
                        <div key={index} className="slide-option">
                            {slide.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChangeSlide;
