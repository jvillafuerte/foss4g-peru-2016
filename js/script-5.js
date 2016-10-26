// gets random RGB color
var getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

var getStyle = function (feature) {
    var color = getRandomColor();
    return {
        color: color,
        weight: 1,
        fillColor: color,
        fillOpacity: 0.6
    };
};

var getPopup = function (feature, layer) {
    layer.bindPopup('<strong>Nombre: </strong>' + feature.properties.name + '<br/>' +
                    '<strong>Hectáreas: </strong>' + feature.properties.hectares);
}

var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 5
});

var layer = new L.StamenTileLayer("toner");

layer.addTo(map);

L.geoJson(peruDepartamental, {
    style: getStyle,
    onEachFeature: getPopup
}).addTo(map);
