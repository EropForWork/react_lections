import React from 'react';
import './slide.css';
import SlideTitle from '../slideTitle/slideTitle';
import SlideSubtitle from '../subtitle/subtitle';
import ColumnContainer from '../columnContainer/columnContainer';
import { useSlideContext } from '../slideContext/slideContext';

function Slide() {
	const { getActiveSlide } = useSlideContext();
    const activeSlide = getActiveSlide();

	if (activeSlide.title) {
		const { title, subtitle, columns } = activeSlide;
		return (
			<div className="slide">
				{title && <SlideTitle value={title} />}
				{subtitle && <SlideSubtitle value={subtitle} />}
				{columns && <ColumnContainer value={columns} />}
			</div>
		);
	} else {
		return <p>Слайд номер *** не загружен</p>;
	}
}

export default Slide;
