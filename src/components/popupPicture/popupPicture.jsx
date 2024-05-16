import React, { forwardRef } from 'react';
import './popupPicture.css';

const PopupPicture = forwardRef(({ imageSrc, onClose, images }, ref) => {
    const handleImgClick = (e) => {
        e.stopPropagation();
    };


    return (
        <div ref={ref} className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={handleImgClick}>
                <img src={imageSrc} alt="" />
            </div>
            <div className="image-column">
                {images.map((image, index) => (
                    <img onClick={handleImgClick} key={index} src={image} alt={`Thumbnail ${index}`} />
                ))}
            </div>
        </div>
    );
});

export default PopupPicture;
