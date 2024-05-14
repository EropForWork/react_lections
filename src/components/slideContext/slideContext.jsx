import React, { createContext, useContext, useState, useEffect } from 'react';

const slideContext = createContext();

const SlideContextProvider = ({ children, jsonData }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slidesArr, setSlidesArr] = useState([]);
    const getActiveSlide = () => {
        return slidesArr[activeSlideIndex] || {}; 
    };

    useEffect(() => {
        if (jsonData) setSlidesArr(jsonData.slides || []);
    }, [jsonData]);
    return (
        <slideContext.Provider value={{ getActiveSlide, setActiveSlideIndex, slidesArr }}>
            {children}
        </slideContext.Provider>
    );
};

const useSlideContext = () => useContext(slideContext);

export { SlideContextProvider, useSlideContext };