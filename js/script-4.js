var getPopup = function (feature, layer) {
    layer.bindPopup('<strong>Nombre: </strong>' + feature.properties.name + '<br/>' +
                    '<strong>Hectáreas: </strong>' + feature.properties.hectares);
}

var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 5
});

var tonerLayer = new L.StamenTileLayer("toner");

tonerLayer.addTo(map);

var departamental = L.geoJson(peruDepartamental, {
    onEachFeature: getPopup
}).addTo(map);
