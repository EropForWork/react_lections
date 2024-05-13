// import React from 'react';
// import './slide.css';
// import { useSlideContext } from '../slideContext/slideContext';
// import SlideTitle from '../slideTitle/slideTitle';
// import SlideSubtitle from '../subtitle/subtitle';
// import ColumnContainer from '../columnContainer/columnContainer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// function Slide({ slideContext }) {
// 	const { value: slideValue } = useSlideContext();
// 	if (!slideContext && slideValue.length > 0) {
// 		const { title, subtitle, columns } = slideValue[0]
// 		return (
// 			<div className="slide">
// 				{
// 					title && <SlideTitle value={title} />
// 				}
// 				{
// 					subtitle && <SlideSubtitle value={subtitle} />
// 				}
// 				{
// 					columns && <ColumnContainer value={columns} />
// 				}
// 			</div>
// 		);
// 	} else {
// 		return <p>Слайд номер *** загружен</p>
// 	}
// }

// export default Slide;


import React, { useState } from 'react';
import './slide.css';
import SlideTitle from '../slideTitle/slideTitle';
import SlideSubtitle from '../subtitle/subtitle';
import ColumnContainer from '../columnContainer/columnContainer';
import { useSlideContext } from '../slideContext/slideContext';

function Slide() {
	const { value: slideValue } = useSlideContext();
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = () => {
		if (activeSlideIndex < slideValue.length - 1) {
			setActiveSlideIndex(prevIndex => prevIndex + 1); 
		} else {
			setActiveSlideIndex(0);
		}
	};

	if (slideValue.length > 0) {
		const { title, subtitle, columns } = slideValue[activeSlideIndex];

		return (
			<div className="slide">
				{title && <SlideTitle value={title} changeSlide={handleSlideChange} />}
				{subtitle && <SlideSubtitle value={subtitle} />}
				{columns && <ColumnContainer value={columns} />}
			</div>
		);
	} else {
		return <p>Слайд номер *** не загружен</p>;
	}
}

export default Slide;
