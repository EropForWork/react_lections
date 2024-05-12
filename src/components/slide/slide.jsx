import React from 'react';
import './slide.css';
import { useSlideContext } from '../slideContext/slideContext';

function Slide() {
    // const { value, setValue } = useSlideContext(); 
    const { value: slideValue } = useSlideContext(); 

    return (
        <div className="slide">
            {slideValue}
            {/* <p>Значение контекста: {value}</p> */}
            {/* <button onClick={() => setValue('новое значение')}>
                Установить новое значение
            </button> */}
        </div>
    );
}

export default Slide;
