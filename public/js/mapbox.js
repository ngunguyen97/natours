/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
//var map = L.map('map').setView([34.111745, -118.113491], 5);

var map = L.map('map', {
  center: [34.111745, -118.113491],
  zoom: 5,
  zoomControl: false
});

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 7,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  interactive: false
}).addTo(map);

var myIcon = L.icon({
  iconUrl: '/img/pin.png',
  iconSize: [32, 40],
  iconAnchor: [20, 43],
  popupAnchor: [-3, -30],
  shadowUrl: '/img/marker-shadow.png',
  shadowSize: [32, 40],
  shadowAnchor: [20, 43]
});

var bounds = new L.latLngBounds();

locations.forEach(loc => {
  console.log(loc.coordinates);
  L.marker(loc.coordinates.reverse(), {
    icon: myIcon
  })
    .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds);

// var marker = L.marker([34.111745, -118.113491], {
//   icon: myIcon
// })
//   .bindPopup('I am a green leaf.')
//   .addTo(map);
