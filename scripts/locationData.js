const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

document.addEventListener("DOMContentLoaded", ()=>{
    const selectLocation = document.getElementById("selectLocation")
    selectLocation.onchange = filterByState;

    const length = locationsArray.length
    for (let i = 0; i < length; i++) {
        let option = document.createElement("option");
        option.textContent = locationsArray[i];
        selectLocation.appendChild(option)
    }

    // displayParks(nationalParksArray)
})

function filterByState() {
    let selected = document.getElementById("selectLocation").value;
    const parks = [];
    for (i = 0; i < nationalParksArray.length; i++) {
        if (nationalParksArray[i].State == selected) {
            parks.push(nationalParksArray[i]);
        }
    }
    displayParks(parks)
}

function displayParks(parks){
    const displayParksDiv = document.getElementById("displayParks");
    displayParksDiv.innerText = "";
    parks.forEach(park => {
        singlePark(park, displayParksDiv)
    });

}

function singlePark(park, displayParksDiv) {
    const parkDiv = document.createElement("div");
    parkDiv.classList.add("park");

    displayParksDiv.appendChild(parkDiv);

    const parkInfoDiv = document.createElement("div");
    parkDiv.appendChild(parkInfoDiv);

    addName(park, parkInfoDiv);
    addAddress(park, parkInfoDiv);
    addContact(park, parkInfoDiv);
    addSite(park, parkInfoDiv);
}

function addName(park, parkInfoDiv) {
    const parkName = document.createElement("h5");
    parkName.innerText = park.LocationName;
    parkInfoDiv.appendChild(parkName);
}

function addAddress(park, parkInfoDiv) {
    const parkAddress = document.createElement("address")

    parkAddress.innerText = "Address:"
    for (const key in park) {
        if (key == "Address" || key == "City" || key == "Zip") {
            if(park[key] !=0)parkAddress.innerText +=` ${park[key]}`;
        }
        else if (key == "State")parkAddress.innerText +=` ${park[key]}`;
    }

    parkInfoDiv.appendChild(parkAddress);
}

function addContact(park, parkInfoDiv) {
    const parkContact = document.createElement("contact")

    for (const key in park) {
        if (key == "Phone" || key == "Fax") {
            if (park[key] !=0)parkContact.innerText +=` ${park[key]}`;
        }
        else if (key == "Phone")parkContact.innerText +=` ${park[key]}`;
    }

    parkInfoDiv.appendChild(parkContact);
}

function addSite(park, parkInfoDiv) {
    const parkSite = document.createElement("site")
    for (const key in park ) {
        if (key == "Visit") {
            if (park[key] !=0)parkSite.innerText +=` ${park[key]}`;
        }
    }
    parkInfoDiv.appendChild(parkSite);
}



