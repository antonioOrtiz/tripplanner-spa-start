const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'YOUR API TOKEN HERE';

const fullstackCoords = [-74.009, 40.705]; // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: 'map',
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);

// select from Hotel, activity, itinerary
// Select between hotels, restaurants and activities (the application will fetch all these data using AJAX)
// Select and set the hotel
// Select and add a restaurant
// Select and add an activity
// Remove the hotel
// Remove a restaurant
// Remove an activity
