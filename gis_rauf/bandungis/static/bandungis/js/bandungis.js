// Pastikan file ini terletak setelah <div id="map" class="map"></div>
var style = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new ol.style.Stroke({
        color: '#319FD3',
        width: 1
    }),
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        })
    })
});

var style2 = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new ol.style.Stroke({
        color: '# #DAF7A6 ',
        width: 1
    }),
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        })
    })
});

var kabupatenLayer = new ol.layer.Vector({
    title: 'Kabupaten',
    source: new ol.source.Vector({
        url: '/static/bandungis/data/kabupaten.geojson',
        format: new ol.format.GeoJSON(),
    }),
    style: function(feature, resolution) {
        style.getText().setText(resolution < 128 ? feature.get('name') : '');
        return style;
    }
});

var kecamatanLayer = new ol.layer.Vector({
    title: 'Kecamatan',
    source: new ol.source.Vector({
        url: '/static/bandungis/data/kecamatan.geojson',
        format: new ol.format.GeoJSON(),

    }),
    style: function(feature, resolution) {
          style2.getText().setText(resolution < 128 ? feature.get('name') : '');
          return style2;
    }
});
var overlayGroup = new ol.layer.Group({
    title: 'Overlays',
    layers: [kabupatenLayer, kecamatanLayer]
});
var map = new ol.Map({
    layers: [
        new ol.layer.Group({
            'title': 'Petanya',
            layers: [
                new ol.layer.Tile({
                    title: 'Stamen - Water color',
                    type: 'base',
                    source: new ol.source.Stamen({
                        layer: 'terrain'
                    })
                }),
            ]
        }),
        overlayGroup
    ],
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      })
    }),
    view: new ol.View({
      center: ol.proj.transform([107.5853139, -6.9840138], 'EPSG:4326', 'EPSG:3857'),
      zoom: 11,
      minZoom: 9,
      maxZoom: 13
    })
});
// Layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);
//overlayGroup.getLayers().push(new ol.layer.Tile({title: 'Kabupaten', source:kabupatenLayer}));
//overlayGroup.getLayers().push(new ol.layer.Tile({title: 'Kecamatan', source:kecamatanLayer}));
// animasi ketika hover
var highlightStyleCache = {};
var featureOverlay = new ol.layer.Vector({
source: new ol.source.Vector(),
map: map,
style: function(feature, resolution) {
  var text = resolution < 5000 ? feature.get('name') : '';
  if (!highlightStyleCache[text]) {
    highlightStyleCache[text] = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#f00',
        width: 1
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255,0,0,0.1)'
      }),
      text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        text: text,
        fill: new ol.style.Fill({
          color: '#000'
        }),
        stroke: new ol.style.Stroke({
          color: '#f00',
          width: 3
        })
      })
    });
  }
  return highlightStyleCache[text];
}
});

var highlight;
var displayFeatureInfo = function(pixel) {

var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
  return feature;
});

var info = document.getElementById('info');
if (feature) {
  info.innerHTML = feature.getId() + ': ' + feature.get('name');
} else {
  info.innerHTML = '&nbsp;';
}

if (feature !== highlight) {
  if (highlight) {
    featureOverlay.getSource().removeFeature(highlight);
  }
  if (feature) {
    featureOverlay.getSource().addFeature(feature);
  }
  highlight = feature;
}

};

map.on('pointermove', function(evt) {
if (evt.dragging) {
  return;
}
var pixel = map.getEventPixel(evt.originalEvent);
displayFeatureInfo(pixel);
});

map.on('click', function(evt) {
displayFeatureInfo(evt.pixel);
});