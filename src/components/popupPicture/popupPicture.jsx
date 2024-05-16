import React, { forwardRef } from 'react';
import './popupPicture.css';

const PopupPicture = forwardRef(({ imageSrc, onClose }, ref) => {
    const handlePopupClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div ref={ref} className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={handlePopupClick}>
                <img src={imageSrc} alt="" />
            </div>
        </div>
    );
});

export default PopupPicture;
