const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

document.addEventListener("DOMContentLoaded", ()=>{
    const selectParkType = document.getElementById("selectParkType")

    const length = parkTypesArray.length
    for (let i = 0; i < length; i++) {
        let option = document.createElement("option");
        option.textContent = parkTypesArray[i];
        selectParkType.appendChild(option)
    }

    displayParks(nationalParksArray)
})

function displayParks() {
    
}