import React from "react";
import Button from "../../atoms/button/Button";
import './double-buttons-virtical.scss';

function DoubleButtonsVirtical(props)
{
    return (
        <div className="btn-wrapper-virtical">
            <Button href={props.href_1} className={props.class_1} text={props.text_1}/>
            <Button href={props.href_2} className={props.class_2} text={props.text_2}/>
        </div>
    );
}

export default DoubleButtonsVirtical;