const L = window.L;

const map = L.map('map').setView([55.81322, 37.63729], 17);

const purpleIcon = L.icon({
  iconUrl: './img/map/pin_filled.png',
  iconSize: [48, 48],
  iconAnchor: [19, 50],
});

L.tileLayer('https://www.openstreetmap.org/?mlat=55.81348&mlon=37.63730#map=17/55.81348/37.63730', {
  maxZoom: 17,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([55.81322, 37.63729], {icon: purpleIcon}).addTo(map);
