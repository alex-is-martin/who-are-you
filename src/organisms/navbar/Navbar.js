import React from "react";
import "./navbar.scss";
import ImageButton from "../../atoms/image-button/ImageButton";
import imageSrc from "../../assets/images/Who-Are-You Logo.png";
import DoubleButtonsHorizontal from "../../molecules/double-buttons-horizontal/DoubleButtonsHorizontal";

function Navbar()
{
    return (
        <div id="navbar">
            <ImageButton href="" src={imageSrc} alt="Who are you logo"/>
            <DoubleButtonsHorizontal 
                href_1="" 
                class_1="btn-blank" 
                text_1 ="Sign In"
                href_2="" 
                class_2="btn-blank" 
                text_2 ="Sign Up"
            />
        </div>
    );
}

export default Navbar;