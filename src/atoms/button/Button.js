import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <a href={props.href} className={props.className}>{props.text}</a>
  );
}

export default Button;