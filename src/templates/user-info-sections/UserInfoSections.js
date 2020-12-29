import React from "react";
import "./user-info-sections.scss";
import Basics from "../../organisms/basics/Basics";
import Work from "../../organisms/work/Work";

function UserInfoSections()
{
    return (
        <div id="user-info-sections">
            <Basics/>
            <Work/>
        </div>
    );
}

export default UserInfoSections;