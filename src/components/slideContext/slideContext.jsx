import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const slideContext = createContext();

// Компонент-провайдер, который будет оборачивать другие компоненты
const SlideContextProvider = ({ children }) => {
    const [value, setValue] = useState('initial value');

    return (
        <slideContext.Provider value={{ value, setValue }}>
            {children}
        </slideContext.Provider>
    );
};

// Хук для использования значения контекста в других компонентах
const useSlideContext = () => useContext(slideContext);

export { SlideContextProvider, useSlideContext };