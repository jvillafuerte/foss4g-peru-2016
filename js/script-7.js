var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 5
});

var layer = new L.StamenTileLayer("toner");

layer.addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});

map.addControl(drawControl);

// map events with leaflet.draw control
map.on('draw:created', function (e) {
    var layer = e.layer;

    map.addLayer(layer);
});
