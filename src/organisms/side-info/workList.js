import user from "../../assets/user-info/user.json";

let workList = [];

user.work.forEach( ({company, position, rank, startDate, endDate, website}) => {
    workList.push(
        <li className="side-list-item" key={company}>
            <div className="side-list-left">
                <span className="company-text">{company}</span>
                <span className="position-text">{position}</span>
                <span className="date-text">{startDate.substr(0,4) + " - " + endDate.substr(0,4)}</span>
                <span className="website-text">{website}</span>
            </div>
            <div className="side-list-right">
                <span className="rank-text">{rank}</span>
            </div>
        </li>
    )
})

export default workList;