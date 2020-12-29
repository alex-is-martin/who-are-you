import React from "react";
import "./work.scss";
import workList from "../../organisms/work/WorkFunctions";

function Work()
{
    return (        
    <div className="section-wrapper">
        <h1 className="section-title">Work</h1>
        <div id="horizontal-line"></div>
        <ul className="section-list">
            {workList}
        </ul>
    </div>
);

}

export default Work;