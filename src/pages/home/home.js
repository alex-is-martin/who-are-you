import React from "react";
import "./home.scss";
import ImageButton from "../../atoms/image-button/ImageButton";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import imageSrc from "../../assets/images/Who-Are-You Logo.png";

function Home(){
    return (
        <div className="home-page">
           <div className="jumbotron">

                <div className="jumbotron-inner">
                    <ImageButton src={imageSrc} alt="Who are you logo"/>
                    <div className="search-bar">
                        <FaSearch className="search-icon"/>
                        <input className="search-input"></input>
                        <div className="search-arrow-button">
                            <FaArrowRight className="arrow-icon"/>
                        </div>
                    </div>
                    <h1 className="jumbotron-heading">Work better, safer, together.</h1>
                    <p className="jumbotron-sub-heading">Whoo is the industries leading social network for the work place.</p>
                </div>
                
           </div>
        </div>
    );
}

export default Home;