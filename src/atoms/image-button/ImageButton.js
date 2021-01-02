import React from 'react';
import './image-button.scss';

function ImageButton(props) {
	return (
		<img className='btn-img' type='image' src={props.src} alt={props.alt} />
	);
}

export default ImageButton;
