// Simulated charging station data
const stations = [
    { name: 'Station A', location: 'Area 1', status: 'Available' },
    { name: 'Station B', location: 'Area 2', status: 'Occupied' },
    { name: 'Station C', location: 'Area 3', status: 'Available' }
];

// Function to display stations
function locateStations() {
    const stationsList = document.getElementById('stations-list');
    stationsList.innerHTML = '';  // Clear previous data
    
    stations.forEach(station => {
        const stationItem = document.createElement('div');
        stationItem.classList.add('station-item');
        stationItem.innerHTML = `
            <h4>${station.name}</h4>
            <p>Location: ${station.location}</p>
            <p>Status: ${station.status}</p>
        `;
        stationsList.appendChild(stationItem);
    });
}
