import React from "react";
import './column.css';
import TextContent from "../textContent/textContent";
import ImageComponent from "../pictures/pictures";

export default function Column({ value }) {
    const { textContent, pucturesContent } = value
    return (
        <div className="column">
            {
                textContent && <TextContent value={textContent} />
            }
            {
                pucturesContent && <ImageComponent value={pucturesContent} />
            }
        </div>
    )
}