const L = window.L;

const map = L.map('map').setView([55.81322, 37.63729], 19);

const purpleIcon = L.icon({
  iconUrl: './img/map/pin_filled.png',
  iconSize: [48, 48],
  iconAnchor: [19, 50],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([55.81322, 37.63729], {icon: purpleIcon}).addTo(map);
