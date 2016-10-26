var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 16
});

var layer = new L.StamenTileLayer("toner");

layer.addTo(map);
