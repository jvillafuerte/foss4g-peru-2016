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

var getPopupProvincial = function (feature, layer) {
    layer.bindPopup('<strong>Nombre: </strong>' + feature.properties.name);
}


var map = L.map('map', {
    center: [-12.0578745, -77.0827605],
    zoom: 5
});

var tonerLayer = new L.StamenTileLayer("toner");

tonerLayer.addTo(map);

var departamental = L.geoJson(peruDepartamental, {
    style: getStyle,
    onEachFeature: getPopup
});

var provincial = L.geoJson(peruProvincial, {
    style: getStyle,
    onEachFeature: getPopupProvincial
});

L.control.layers({
    'Toner': tonerLayer
}, {
    'Departamental': departamental,
    'Provincial': provincial
}).addTo(map);
