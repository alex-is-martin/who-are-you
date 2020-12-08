import React from "react";
import "./home.scss";
import Jumbotron from "../../templates/jumbotron/Jumbotron"
import UserInfoSections from "../../templates/user-info-sections/UserInfoSections";

function Home()
{
    return (
        <div id="home-page">
            <Jumbotron/>
            <UserInfoSections/>
        </div>
    );
}

export default Home;