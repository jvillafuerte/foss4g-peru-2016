var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 16
});

var tonerLayer = new L.StamenTileLayer("toner");
var watercolorLayer = new L.StamenTileLayer("watercolor");
var terrainLayer = new L.StamenTileLayer("terrain");

watercolorLayer.addTo(map);

L.control.layers({
    'Toner': tonerLayer,
    'WaterColor': watercolorLayer,
    'Terrain': terrainLayer
}).addTo(map);
