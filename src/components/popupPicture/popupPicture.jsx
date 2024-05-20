import React, { forwardRef, useState, useEffect } from 'react';
import './popupPicture.css';

const PopupPicture = forwardRef(({ imageSrc, onClose, images }, ref) => {
    const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);
    useEffect(() => {
        if (images.length <= 1 && ref.current)
            ref.current.style.gridTemplateColumns = images.length <= 1 && ref.current ? 'none' : ''
    }, [images, ref]);

    const handleImgClick = (e) => {
        e.stopPropagation();
    };

    const handleThumbnailClick = (e, newSrc) => {
        setCurrentImageSrc(newSrc);
        Array.from(e.currentTarget.parentElement.querySelectorAll('img')).forEach((img) => { if (img.style.left !== '') img.style.left = '' })
        e.currentTarget.style.left = '-0.5vw';
    };

    return (
        <div ref={ref} className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={handleImgClick}>
                <img src={currentImageSrc} alt="" />
            </div>
            {images.length > 1 && (
                <div className="image-column" onClick={(e) => handleImgClick(e)}>
                    {images.map((image, index) => (
                        <img
                            onClick={(e) => handleThumbnailClick(e, image)}
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );

});

export default PopupPicture;
