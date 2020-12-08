import React from "react";
import "./image-button.scss";

function ImageButton(props)
{
    return (
        <input className="btn-img" href={props.href} type="image" src={props.src} alt={props.alt}/>
    );
}

export default ImageButton;