import React from 'react';
import './button.scss';

function Button(props) {
	return <div className={props.className}>{props.text}</div>;
}

export default Button;
