import React from 'react';
import './lectionContainer.css';

export default function LectionContainer({ children }) {

    return (
        <div className="lection-container">
            {children}
        </div>
    );
}
