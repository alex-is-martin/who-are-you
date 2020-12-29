import user from "../../assets/user-info/user.json";

// Holds all <li> elements with valid info
let basicsList = [];

/*
    @breif creates all <li> elements for Basics React component

    @param json object to iterate through
    @param class name to be added to html element
    @param lets you add on to key to create unique value when using loop to call function
    @return None, edits basicsList array outside of function at top of this file
*/
function createListElements(myObj, className, keyAddOn="")
{
    for(let key in myObj)
    {
        
        // Holds current value for json keys
        let value = myObj[key]

        // All non valid keys and values
        let isNotEmpty = myObj[key] !== "";
        let isNotArray = !Array.isArray(value);
        let isNotObject = typeof value !== 'object';
        let isNotPicture = key !== "picture";

        if(isNotEmpty && isNotArray && isNotObject && isNotPicture)
        {
            // Capitalize first char in key
            let keyString = key.charAt(0).toUpperCase() + key.slice(1);

            // Work around for profiles section, adds top margin if item is new network
            if(keyString !== "Network"){
                basicsList.push(
                    <li className={className} key={key + keyAddOn}>
                        <p className="sub-title">{keyString}</p>
                        {": " + myObj[key]}
                    </li>
                );
            }
            else{
                basicsList.push(
                    <li className={className + " list-item-spaced"} key={key + keyAddOn}>
                        <p className="sub-title">{keyString}</p>
                        {": " + myObj[key]}
                    </li>
                );
            }
        }
    }
}

// Creates <li> elements for beggining of basics object of user json
createListElements(user.basics, "list-item");

// Creates <li> elements for locations in basics object of user json
basicsList.push(<li className="list-item-spaced sub-title" key="locations">Locations:</li>);
createListElements(user.basics.location, "list-item-tabbed");

// Creates <li> elements for social profiles in basics object of user json
basicsList.push(<li className="list-item-spaced sub-title" key="profiles">Profiles:</li>);
for(let i in user.basics.profiles)
{
    // Work around for first item in profiles array in basics object of user json
    let className = (i === "0") ? "list-item-tabbed undo-space" : "list-item-tabbed";
    createListElements(user.basics.profiles[i], className, i);
}

export default basicsList;