import React, { useState, createContext } from "react";

export const ProfileInfoContext = createContext();

export const ProfileInfoProvider = (props) => {
    const [profileInfo, setProfileInfo] = useState("About");

    return (
        <ProfileInfoContext.Provider value={[profileInfo, setProfileInfo]}>
            {props.children}
        </ProfileInfoContext.Provider>
    );
}