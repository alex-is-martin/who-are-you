import React from "react";
import Button from "../../atoms/button/Button";
import './double-buttons-horizontal.scss';

function DoubleButtonsHorizontal(props)
{
    return (
        <div className="btn-wrapper-horizontal">
            <Button href={props.href_1} className={props.class_1} text={props.text_1}/>
            <Button href={props.href_2} className={props.class_2} text={props.text_2}/>
        </div>
    );
}

export default DoubleButtonsHorizontal;