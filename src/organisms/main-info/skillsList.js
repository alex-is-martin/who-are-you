import user from "../../assets/user-info/user.json";

let skillsList = [];

for(let i in user.skills)
{
    for(let skill in user.skills[i].keywords){
        skillsList.push(
            <li key={user.skills[i].keywords[skill]} className="skills-list-item">{user.skills[i].keywords[skill]}</li>
        );
    }
}

export default skillsList;