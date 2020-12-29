import React, { useContext } from "react";
import "./info-sections.scss";
import { ProfileInfoContext } from "../../contexts/profileInfoContext";
import user from "../../assets/user-info/user.json";

function InfoSections(props)
{
    const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);

    return (
        <div className={props.className}>
            <div className={profileInfo === "About" ? "section" : "hide"} >

                <div className="sub-section">
                    <span className="section-title">CONTACT INFORMATION</span>
                    <div className="info-line">
                        <span className="info-line-title">Phone:</span>
                        <span className="info-line-user-info color">{user.basics.phone}</span>
                    </div>
                    <div className="info-line">
                        <span className="info-line-title">Address:</span>
                        <div className="address-container">
                            <span className="info-line-user-info">{user.basics.location.address}</span>
                            <span className="info-line-user-info">{user.basics.location.city + ", " +
                            user.basics.location.region + ", " + user.basics.location.postalCode}</span>
                        </div>
                    </div>
                    <div className="info-line">
                        <span className="info-line-title">Email:</span>
                        <span className="info-line-user-info color">{user.basics.email}</span>
                    </div>
                    <div className="info-line">
                        <span className="info-line-title">Site:</span>
                        <span className="info-line-user-info color">{user.basics.website}</span>
                    </div>
                </div>

                <div className="sub-section">
                    <span className="section-title">INTERESTS</span>
                    {user.interests.map( ({name, keywords}) => (
                            <div className="info-line">
                                <span className="info-line-title">{name + ":"}</span>
                                {/* Map through every keyword for each interest and dont add ", " if its the last keyword */}
                                <span className="info-line-user-info">{keywords.map(keyword => (keyword + (keyword === keywords[keywords.length-1] ? "" : ", ")))}</span>
                            </div>)
                    )}
                </div>

                <div className="sub-section">
                    <span className="section-title">LANGUAGES</span>
                    {user.languages.map( ({language, fluency}) => (
                            <div className="info-line">
                                <span className="info-line-title">{language + ":"}</span>
                                <span className="info-line-user-info">{fluency}</span>
                            </div>)
                    )}
                </div>

            </div>

            <h1 className={profileInfo === "Socials" ? "" : "hide"}>Socials</h1>
            <h1 className={profileInfo === "Awards" ? "" : "hide"}>Awards</h1>
            <h1 className={profileInfo === "Publications" ? "" : "hide"}>Publications</h1>
            <h1 className={profileInfo === "Volunteer" ? "" : "hide"}>Volunteer</h1>
            <h1 className={profileInfo === "References" ? "" : "hide"}>References</h1>
        </div>
    );
}

export default InfoSections;