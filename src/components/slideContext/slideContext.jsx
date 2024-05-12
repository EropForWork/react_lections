import React, { createContext, useContext, useState, useEffect } from 'react';

const slideContext = createContext();

const SlideContextProvider = ({ children, jsonData }) => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        if (jsonData) setValue(jsonData.slides || []);
    }, [jsonData]);

    return (
        <slideContext.Provider value={{ value, setValue }}>
            {children}
        </slideContext.Provider>
    );
};

const useSlideContext = () => useContext(slideContext);

export { SlideContextProvider, useSlideContext };