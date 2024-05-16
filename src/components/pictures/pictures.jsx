import React, { useRef, useState, useEffect } from 'react';
import './pictures.css';
import PopupPicture from '../popupPicture/popupPicture';

const ImageComponent = ({ value }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const popupRef = useRef(null);

    const handleClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowPopup(true);
    };

    useEffect(() => {
        if (showPopup && popupRef.current) {
            setTimeout(() => {
                popupRef.current.style.opacity = 1;
            }, 10);
        }
    }, [showPopup]);

    const closePopup = () => {
        popupRef.current.addEventListener('transitionend', (e) => {
            if (e.propertyName === 'opacity') {
                setShowPopup(false);
            }
        })
        popupRef.current.style.opacity = 0;
    };

    return (
        <div className='image-container'>
            {value.map((image, index) => (
                <img className='image' key={index} src={image} alt="" onClick={() => handleClick(image)} />
            ))}
            {showPopup && <PopupPicture ref={popupRef} imageSrc={selectedImage} onClose={closePopup} />}
        </div>
    );
};

export default ImageComponent;
