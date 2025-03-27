/* 
const locationInput = document.getElementById("locationInput"); 
const addLocationButton = document.getElementById("addLocationButton");
const locationsList = document.getElementById("locationsList"); 
let locationsArray = []; 
let map; 
addLocationButton.addEventListener("click", addLocation); 
function addLocation() { 
    const location = locationInput.value.trim(); 
    if (location !== "") { 
        locationsArray.push(location); 
        locationInput.value = ""; 
        updateLocationsList(); 
        updateMap(); 
    } 
} 

function updateLocationsList() { 
    locationsList.innerHTML = ""; 
    locationsArray.forEach((location) => { 
        const li = document.createElement("li"); 
        li.textContent = location; 
        locationsList.appendChild(li); 
    }); 
}

function updateMap() { 
    if (map) { 
        map = L.map("map").setView([0, 0], 2); 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { 
            attribution: "© OpenStreetMap contributors", 
        }).addTo(map); 
    } 
    locationsArray.forEach((location) => { 
        L.marker(getRandomCoordinates()).addTo(map).bindPopup(location); 
    }); 
}

function getRandomCoordinates() {
    const lat = (Math.random() * 180) - 90; 
    const lng = (Math.random() * 360) - 180; 
    return [lat, lng]; 
}
*/

const locationInput = document.getElementById("locationInput"); 
const addLocationButton = document.getElementById("addLocationButton"); 
const locationsList = document.getElementById("locationsList"); 
let locationsArray = []; 
let map; 
addLocationButton.addEventListener("click", addLocation);

function addLocation() { 
    const location = locationInput.value.trim(); 
    if (location !== ""){ 
        locationsArray.push(location); 
        locationInput.value = ""; 
        updateLocationsList(); 
        updateMap(location); 
    } 
}

function updateLocationsList() { 
    locationsList.innerHTML = ""; 
    locationsArray.forEach((location) => { 
        const li = document.createElement("li"); 
        li.textContent = location; 
        li.addEventListener("click", () => updateMap(location)); 
        locationsList.appendChild(li); 
    }); 
}

function updateMap(location) { 
    if (!map) { 
        map = L.map("map").setView([0, 0], 2); 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { 
            attribution: "© OpenStreetMap contributors"
        }).addTo(map); 
    } 
    const coordinates = getCoordinatesForLocation(location); 
    if (coordinates) { 
        map.setView(coordinates, 6); 
        L.marker(coordinates).addTo(map).bindPopup(location); 
    } else { 
        alert("Location not found or coordinates not available"); 
    }
}

function getCoordinatesForLocation(location) { 
    const locationCoordinates = { 
        "philippines": [13.41, 122.56], 
        "taiwan": [23.697809, 120.960518], 
        "manila": [14.599512, 120.984222], 
        "iloilo": [10.720150, 122.562103], 
        "cebu":[10.3157, 123.8854],  // Added new location
            "davao": [7.1907, 125.4553],  // Added new location
            "japan": [35.682839, 139.759455], // Added new location
    }; 
    return locationCoordinates[location.toLowerCase()]; 
}
