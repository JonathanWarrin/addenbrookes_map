let map;
let markers = [];

const myIcon = L.icon({
    iconUrl: 'circle_blue_black.png',
    iconSize: [60, 60]
});

function initMap() {
    console.log("initMap is running");
    map = L.map('map', {
        fullscreenControl: true,
    });
    
    const bounds = calculateBounds();
    const imageLayer = L.imageOverlay('level_2.png', bounds).addTo(map);
    map.fitBounds(imageLayer.getBounds());

    addEventListeners();
    populateLocationList();
}

function addMarkerToMap(coords) {
    // Clear all markers first
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    console.log("Adding marker to map at coordinates:", coords);
    const marker = L.marker(coords, { icon: myIcon }).addTo(map);
    console.log("Marker:", marker);
    markers.push(marker);
    console.log("Attempting to fly to marker...");
    map.flyTo(marker.getLatLng(), map.getZoom());
}

function resizeMap() {
    map.invalidateSize();
    map.fitBounds(calculateBounds());
}

function addEventListeners() {
    map.on('click', onMapClick);
}

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

function calculateBounds() {
    const mapWidth = 850;
    const mapHeight = 564;
    return [[-mapHeight / 2, -mapWidth / 2], [mapHeight / 2, mapWidth / 2]];
}




let locations = [

    { name: 'ACCI', coordinates: [-54.162434, 243.984375] },
    { name: 'ATC X-Ray - lvl3', coordinates: [-49.837982, 366.328125] },
    { name: 'Blood Tests', coordinates: [-38.082974, -309.375] },
    { name: 'Breast Unit', coordinates: [-19.973349, 216.5625] },
    { name: 'Cardiology Diagnostic Tests', coordinates: [-42.60308, -136.40625] },
    { name: 'Careers', coordinates: [-58.077876, -19.6875] },
    { name: 'Cleft Lip and Palatte - lvl3', coordinates: [-18.646245, -291.09375] },
    { name: 'Clinic 1 (Orthopaedic)', coordinates: [-42.55308, -179.296875] },
    { name: 'Clinic 1a - lvl3 (Immunology)', coordinates: [33.137551, -120.234375] },
    { name: 'Clinic 2 (Rheumatology/ECG)', coordinates: [25.165173, -180.703125] },
    { name: 'Clinic 2a (Allergy/Lung)', coordinates: [25.799891, -151.171875] },
    { name: 'Clinic 3 - lvl3 (Opthalmology/Eye)', coordinates: [-10.239945, -180] },
    { name: 'Clinic 4 - lvl3 (Surgery/GI)', coordinates: [-10.239945, -180] },
    { name: 'Clinic 4a - lvl3 (Ultrasound)', coordinates: [-10.239945, -180] },
    { name: 'Clinic 5 (Ambulatory)', coordinates: [-37.210317, -266.484375] },
    { name: 'Clinic 6 (Paediatric)', coordinates: [25.191346, -321.328125] },
    { name: 'Clinic 7 - lvl 3 (Skin)', coordinates: [-19.311143, -289.6875] },
    { name: 'Clinic 8 - lvl 3 (Oral)', coordinates: [-12.554564, -334.6875] },
    { name: 'Clinic 9 (UTC)', coordinates: [-52.609482, -268.484375] },
    { name: 'Clinic 10 (ENT/Audiology)', coordinates: [25.799891, -209.53125] },
    { name: 'Clinic 12 - lvl3 (GI/Renal)', coordinates: [-10.239945, -180] },
    { name: 'Clinic 14', coordinates: [33.087551, -382.5] },
    { name: 'Clinic 22', coordinates: [72.766074, 271.40625] },
    { name: 'Clinic 23 - lvl3', coordinates: [47.040182, 237.65625] },
    { name: 'Clinic 25', coordinates: [34.835931, 272.109375] },
    { name: 'Clinic 30', coordinates: [-48.508352, 309.375] },
    { name: 'Clinic 31', coordinates: [-60.289811, 351.5625] },
    { name: 'Clinic 32', coordinates: [-57.754147, 380.390625] },
    { name: 'Clinic 33 - lvl3', coordinates: [-49.837982, 366.328125] },
    { name: 'Clinic 34', coordinates: [-23.935838, 381.09375] },
    { name: 'Clinic 42', coordinates: [-63.283627, 140.625] },
    { name: 'Clinic 43', coordinates: [-83.726943, 79.453125] },
    { name: 'Clinical Neurophysiology - lvl3', coordinates: [-27.683528, -66.796875] },
    { name: 'Child Development Centre', coordinates: [-4.915833, 291.796875] },
    { name: 'CT and MRI imaging', coordinates: [11.817351, -123.046875] },
    { name: 'Day Surgery', coordinates: [-23.241346, 348.75] },
    { name: 'DEXA - lvl3', coordinates: [-9.102097, -181.40625] },
    { name: 'Endoscopy - lvl3', coordinates: [-49.837982, 366.328125] },
    { name: 'Eye Unit and Cataract', coordinates: [-50.289339, -388.125] },
    { name: 'Haematology', coordinates: [74.909392, -106.171875] },
    { name: 'Haematology Day Unit', coordinates: [-83.111071, 110.390625] },
    { name: 'Heart Clinic', coordinates: [-1.406109, 168.046875] },
    { name: 'Lewin Unit', coordinates: [70.377854, 16.875] },
    { name: 'Lysosomal Unit', coordinates: [78.490552, 8.4375] },
    { name: 'Medical Photography - lvl3', coordinates: [-17.308688, -336.09375] },
    { name: 'Medical Records - lvl3', coordinates: [-20.632784, -284.765625] },
    { name: 'MRIs', coordinates: [80.983688, 49.921875] },
    { name: 'NCCU', coordinates: [-10.487812, -63.984375] },
    { name: 'Neonatal Unit - lvl3', coordinates: [64.774125, 242.578125] },
    { name: 'Nuclear Medicine', coordinates: [-59.225928, -158.203125] },
    { name: 'Oncology', coordinates: [63.810036, -104.765625] },
    { name: 'Pain Clinic - lvl3', coordinates: [-17.308688, -336.09375] },
    { name: 'Paedeatric Day Unit', coordinates: [2.108899, 6.328125] },
    { name: 'PET Imaging', coordinates: [11.128402, -86.48437] },
    { name: 'Physiotherapy', coordinates: [-0.05, -265.78125] },
    { name: 'Plastic Surgery - lvl3', coordinates: [-36.597889, 223.59375] },
    { name: 'PUVA', coordinates: [70.377854, -26.71875] },
    { name: 'Radiology Day Unit - lvl3', coordinates: [-17.308688, -177.890625] },
    { name: 'Radiotherapy', coordinates: [78.299411, -104.765625] },
    { name: 'Speech and Language Therapy', coordinates: [41.508577, 27.421875] },
    { name: 'Speech Therapy - lvl3', coordinates: [-19.311143, -286.171875] },
    { name: 'Ultrasound - lvl3', coordinates: [-17.308688, -177.890625] },
    { name: 'Wolfson Brain Imaging', coordinates: [52.48278, -54.84375] },
    { name: 'X-Ray', coordinates: [0.653107, -150.46875] },



    { name: 'A Wards', coordinates: [13.923404, -39.375] },
    { name: 'C Wards', coordinates: [-3.513421, 49.21875] },
    { name: 'Charles Wolfson Ward', coordinates: [33.72434, 213.75] },
    { name: 'D Wards', coordinates: [-2.811371, 105.46875] },
    { name: 'Daphne Ward', coordinates: [32.546813, 274.21875] },
    { name: 'F Wards', coordinates: [58.813742, 64.6875] },
    { name: 'G Wards', coordinates: [58.447733, 89.296875] },
    { name: 'J Wards', coordinates: [54.162434, 137.109375] },
    { name: 'K Wards', coordinates: [-23.885838, 173.671875] },
    { name: 'L Wards', coordinates: [-4.214943, 367.03125] },
    { name: 'Lady Mary Ward', coordinates: [0, 219.375] },
    { name: 'M Wards', coordinates: [-4.214943, 367.03125] },
    { name: 'N Wards', coordinates: [68.138852, 133.59375] },
    { name: 'R2 Ward', coordinates: [62.267923, 7.734375] },
    { name: 'S Wards', coordinates: [-80.760615, 180.703125] },
    { name: 'Sara Ward', coordinates: [49.382373, 236.953125] }


];

function populateLocationList() {
    const locationList = document.getElementById('location-list');

    // Clear any existing items first
    locationList.innerHTML = '';

    locations.forEach(location => {
        const listItem = document.createElement('li');
        listItem.textContent = location.name;
        listItem.setAttribute('data-coordinates', JSON.stringify(location.coordinates));

        // Add click event to the list item
        listItem.addEventListener('click', function () {
            const coords = JSON.parse(this.getAttribute('data-coordinates'));
            addMarkerToMap(coords);
        });

        locationList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMap();
    window.addEventListener('resize', resizeMap);
    resizeMap(); // Call immediately to ensure correct size on load
});