import React from "react";
import "./basics.scss";
import user from "../../assets/user-info/user.json";

function Basics()
{
    // Holds list items with valid info inserted
    let basicsList = [];
    for(let key in user.basics)
    {
        
        // Holds current json keys value in basics section
        let currentObject = user.basics[key]

        // All non valid keys
        let isNotEmpty = user.basics[key] !== "";
        let isNotArray = !Array.isArray(currentObject);
        let isNotObject = typeof currentObject !== 'object';
        let isNotPicture = key !== "picture";

        if(isNotEmpty && isNotArray && isNotObject && isNotPicture)
        {
            // Capitalize first char in key
            let keyString = key.charAt(0).toUpperCase() + key.slice(1);
            basicsList.push(
                <li>{keyString + ": " + user.basics[key]}</li>
            );
        }
    }


    return(
        <div className="section-wrapper">
            <h1 className="section-title">Basics</h1>
            <div id="horizontal-line"></div>
            <ul className="section-list">
                {basicsList}
            </ul>
        </div>
    );
}

export default Basics;