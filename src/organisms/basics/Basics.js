import React from "react";
import "./basics.scss";
import basicsList from "./BasicsFunctions";

function Basics()
{
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