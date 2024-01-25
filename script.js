var map = L.map('map').setView([37.780, -122.4389], 12);

var Stamen_Terrain = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

$.getJSON('https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson', function(data) {
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});

