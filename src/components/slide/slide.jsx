import React from 'react';
import './slide.css';
import { useSlideContext } from '../slideContext/slideContext';
import SlideTitle from '../slideTitle/slideTitle';
import SlideSubtitle from '../subtitle/subtitle';
import ColumnContainer from '../columnContainer/columnContainer';

function Slide({ slideContext }) {
	const { value: slideValue } = useSlideContext();
	if (!slideContext && slideValue.length > 0) {
		const { title, subtitle, columns } = slideValue[0]
		return (
			<div className="slide">
				{
					title && <SlideTitle value={title} />
				}
				{
					subtitle && <SlideSubtitle value={subtitle} />
				}
				{
					columns && <ColumnContainer value={columns} />
				}
			</div>
		);
	} else {
		return <p>Слайд номер *** загружен</p>
	}
}

export default Slide;
