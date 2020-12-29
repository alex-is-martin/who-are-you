import React from "react";
import "./bookmark.scss";
import { FaRegBookmark } from "react-icons/fa";

function Bookmark()
{
    return (
        <div className="bookmark-container">
            <FaRegBookmark className="bookmark-icon"/>
            <span className="bookmark-text">Bookmark</span>
        </div>
    );
}

export default Bookmark;