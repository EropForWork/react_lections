import React from "react";
import './columnContainer.css';
import Column from "../column/column";


export default function ColumnContainer({ value }) {
    return (
        <div className="columns-container">
            {value.map((column, index) => (
                <Column key={index} value={column} />
            ))}
        </div>
    )
}