import React from "react";
import './column.css';
import TextContent from "../textContent/textContent";

export default function Column({ value }) {
    const { textContent } = value
    return (
        <div className="column">
            {
                textContent && <TextContent value={textContent} />
            }
        </div>
    )
}