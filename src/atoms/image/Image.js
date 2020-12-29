import React from "react";
import "./image.scss";
import userImage from "../../assets/images/user-image.jpg"

function Image(props)
{
    return (
        <div className="image-container">
            <img className={props.className === "user-img" ? "user-img" : "img"} type="image" src={userImage} alt="User"/>
        </div>
    );
}

export default Image;