import React from "react";
import "./pin.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import user from "../../assets/user-info/user.json";

function Pin()
{
    return (
        <div className="pin">
            <FaMapMarkerAlt className="pin-icon"/>
            <h3 className="location-text">
                {user.basics.location.city + ", " + user.basics.location.region}
            </h3>
        </div>
    );
}

export default Pin;