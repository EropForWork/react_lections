import React from 'react';
import './pictures.css';

const ImageComponent = ({ value }) => {
    const handleClick = (e) => {
        console.log(e.target);
        //TODO Создать контейнер для попап окон с рисунками.
    }
    return (
        <div className='image-container'>
            {value.map((image, index) => (
                <img className='image' key={index} src={image} alt="" onClick={handleClick} />
            ))}
        </div>
    );
};

export default ImageComponent;
