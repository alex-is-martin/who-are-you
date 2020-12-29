import user from "../../assets/user-info/user.json";

let educationList = [];

user.education.forEach( ({institution, area, studyType, startDate, endDate}) => {
    educationList.push(
        <li className="side-list-item" key={institution}>
            <div className="side-list-left">
                <span className="company-text">{institution}</span>
                <span className="position-text">{area}</span>
                <span className="date-text">{startDate.substr(0,4) + " - " + endDate.substr(0,4)}</span>
                {/* <span className="website-text">{website}</span> */}
            </div>
            <div className="side-list-right">
                <span className="rank-text">{studyType}</span>
            </div>
        </li>
    )
})

export default educationList;