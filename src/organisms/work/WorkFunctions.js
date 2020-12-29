import user from "../../assets/user-info/user.json";

// Holds all <li> elements with valid info
let workList = [];

function createListElements(myObj, className, keyAddOn="")
{
    for(let key in myObj)
    {
        // Holds current value for json keys
        let value = myObj[key]

        // All non valid keys and values
        let isNotEmpty = myObj[key] !== "";
        let isNotArray = !Array.isArray(value);
        let isArray = Array.isArray(value);
        let isNotObject = typeof value !== 'object';

        if(isNotEmpty && isNotArray && isNotObject)
        {
            // Capitalize first char in key
            let keyString = key.charAt(0).toUpperCase() + key.slice(1);

            // Work around for profiles section, removes sub title if title is a number
            if(!isNaN(key)){
                workList.push(
                    <li className={className} key={key + keyAddOn}>
                        {" - " + myObj[key]}
                    </li>
                );
            }
            // Work around for profiles section, adds top margin if item is new network
            else if(keyString !== "Company"){
                workList.push(
                    <li className={className} key={key + keyAddOn}>
                        <p className="sub-title">{keyString}</p>
                        {": " + myObj[key]}
                    </li>
                );
            }
            else{
                workList.push(
                    <li className={className + " list-item-spaced"} key={key + keyAddOn}>
                        <p className="sub-title">{keyString}</p>
                        {": " + myObj[key]}
                    </li>
                );
            }
        }
        else if(isArray)
        {
            workList.push(<li className="list-item-spaced sub-title list-item-tabbed" key="highlights">Highlights:</li>);
            // Work around for first item in profiles array in basics object of user json
            createListElements(value, className);
        }
    }
}

// Creates <li> elements for all previous employers in work section of user json
workList.push(<li className="list-item-spaced sub-title" key="work">Work:</li>);
for(let i in user.work)
{
    // Work around for first item in profiles array in basics object of user json
    let className = (i === "0") ? "list-item-tabbed undo-space" : "list-item-tabbed";
    createListElements(user.work[i], className, i);
}


// for(let i in user.work)
// {
//     // Work around for first item in profiles array in basics object of user json
//     let className = (i === "0") ? "list-item-tabbed undo-space" : "list-item-tabbed";
//     createListElements(user.work[i], className, i);
// }
export default workList;