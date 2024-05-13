import React from 'react';
import './changeSlide.css';
import { useSlideContext } from '../slideContext/slideContext';

const ChangeSlide = () => {
    const { value: slideValue } = useSlideContext();

    const handleMouseEnter = (e) => {
        const dropdown = e.currentTarget.querySelector('.slide-dropdown');
        if (!dropdown) return;
        dropdown.style.opacity = 1;
        dropdown.style.pointerEvents = 'all';
        dropdown.style.transition = 'opacity 0.3s 0.3s';
    };

    const handleMouseLeave = (e) => {
        const dropdown = e.currentTarget.querySelector('.slide-dropdown');
        if (!dropdown) return;
        dropdown.style.opacity = 0;
        dropdown.style.pointerEvents = 'none';
        dropdown.style.transition = 'opacity 0.1s';
    };

    return (
        <div className="change-slide-container">
            <div className="change-slide-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="change-slide">
                    Slide
                </button>
                <div className="slide-dropdown">
                    <div className="slide-option-epmpty"></div>
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
