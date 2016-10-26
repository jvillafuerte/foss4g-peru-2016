var map;

var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
};

var addMarker = function (m) {
    m.addTo(map);
    m.bindPopup("<b>El marker de al lado.</b>");
};

var addPolygon = function () {
    var bounds = map.getBounds();
    var vertexs = 3;
    var vertexsArray = [];

    for (var i = 0; i < vertexs; i++) {
        vertexsArray.push([
            getRandom(bounds._southWest.lat, bounds._northEast.lat),
            getRandom(bounds._southWest.lng, bounds._northEast.lng)
        ]);
    }

    L.polygon(vertexsArray).addTo(map);
};

var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 16
});

var toner = new L.StamenTileLayer("toner");
toner.addTo(map);

var marker = L.marker([-12.0578745, -77.0827605]);
var otherMarker = L.marker([-12.0578745, -77.0787605]);

marker.addTo(map);
marker.bindPopup("<b>Holi!</b><br>Soy un popup.");
