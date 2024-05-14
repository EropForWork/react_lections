import React from 'react';
import './changeSlide.css';
import { useSlideContext } from '../slideContext/slideContext';

const ChangeSlide = () => {
    const { slidesArr, setActiveSlideIndex } = useSlideContext();
    const handleSlideChange = (e) => {
        setActiveSlideIndex(parseInt(e.currentTarget.innerHTML) - 1);
    };

    const handleMouseEnter = (e) => {
        const { bottom } = Array.from(e.currentTarget.querySelectorAll('.slide-option')).at(-1).getBoundingClientRect();
        e.currentTarget.style.height = bottom + 'px';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.height = '';
    };

    return (
        <div className="change-slide-container">
            <div className="change-slide-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="change-slide">Slide</span>
                {slidesArr.map((slide, index) => (
                    <div key={index} className="slide-option" onClick={handleSlideChange}>
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChangeSlide;
