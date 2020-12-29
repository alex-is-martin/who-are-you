import React from "react";
import "./navbar.scss";
import ImageButton from "../../atoms/image-button/ImageButton";
import imageSrc from "../../assets/images/Who-Are-You Logo.png";
import DoubleButtonsHorizontal from "../../molecules/double-buttons-horizontal/DoubleButtonsHorizontal";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <div id="navbar">
            <Link to="/who-are-you">
                <ImageButton href="" src={imageSrc} alt="Who are you logo"/>
            </Link>
            <div className="nav-btn-container">
                <Link className="link" to="/profile">
                    <Button className="btn-blank" text="Profile"/>
                </Link>
                <Link className="link" to="/sign-in">
                    <Button className="btn-blank" text="Sign In"/>
                </Link>
                <Link className="link" to="/sign-up">
                    <Button className="btn-blank" text="Sign Up"/>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;