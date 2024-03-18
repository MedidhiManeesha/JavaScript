// function curSuccess(pos){
//     const coords = pos.coords
//     // console.log(`Latitude: ${coords.latitude}`);
//     // console.log(`longitude: ${coords.longitude}`);
//     // console.log(`Accuracy: ${coords.accuracy}`);

//     console.log(pos);
// }

// function curError(err){
//     console.log(`Error: ${err.code} - ${err.message}`);
// }

// const CurOptions = {
//     enableHighAccuracy : true,  // use GPS if available
//     timeout : 5000,   // Time to wait to stop trying for location
//     maximumAge: 0,   // Do not use a cached position
// }


// navigator.geolocation.getCurrentPosition(curSuccess, curError, CurOptions)

// watchPosition

// const target = {
//     latitude: 14.5439872,
//     longitude: 78.4728064
// }

// function watchSuccess(pos){
//     const coords = pos.coords;
//     console.log(coords);

//     if (target.latitude === coords.latitude && target.longitude === coords.longitude){
//         console.log('Reached destination');
//         navigator.geolocation.clearWatch(id)
//     }
// }

// function watchError(err){
//     console.log(`Error: ${err.code} - ${err.message}`);
// }

// const watchOptions = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
// }

// const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions)

// Leaflet

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0,0]).addTo(map)
navigator.geolocation.getCurrentPosition(function(pos){
    const lat =pos.coords.latitude;
    const lng =pos.coords.longitude;

    marker.setLatLng([lat,lng]).update();
    map.setView([lat,lng],13)
})



















