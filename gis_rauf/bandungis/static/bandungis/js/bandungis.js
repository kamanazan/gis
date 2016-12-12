// Pastikan file ini terletak setelah <div id="map" class="map"></div>
// Layer untuk peta dasar
var kabupatenLayer = new ol.layer.Image({
    title: 'Kabupaten',
    source:  new ol.source.ImageWMS({
            url: 'http://0.0.0.0:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kabupaten',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    })
});

var kabupatenBatasLayer = new ol.layer.Image({
    title: 'Batas Kabupaten',
    source:  new ol.source.ImageWMS({
            url: 'http://0.0.0.0:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kabupaten_batas',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    })
});

var kecamatanLayer = new ol.layer.Image({
    title: 'Kecamatan',
    source:  new ol.source.ImageWMS({
            url: 'http://0.0.0.0:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    })
});

var kecamatanBatasLayer = new ol.layer.Image({
    title: 'Batas Kecamatan',
    source:  new ol.source.ImageWMS({
            url: 'http://0.0.0.0:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan_batas',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    })
});

var desaLayer = new ol.layer.Image({
    title: 'Desa',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var desaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:desa_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var jalanLayer = new ol.layer.Image({
    title: 'Jalan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var provinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:provinsi',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var sungaiLayer = new ol.layer.Image({
    title: 'Sungai',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:sungai',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var pemerintahanLayer = new ol.layer.Image({
    title: 'Pusat Pemerintahan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pemerintahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

//Layer untuk pola ruang

var polaAreaPariwisataLayer = new ol.layer.Image({
    title: 'Area Pariwisata',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_area_pariwisata',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaSungaiLayer = new ol.layer.Image({
    title: 'Sungai',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_aliran_sungai',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaDesaLayer = new ol.layer.Image({
    title: 'Desa',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaDesaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_desa_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaEnergiIndukLayer = new ol.layer.Image({
    title: 'Energi Induk',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_energi_induk',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaJalanLayer = new ol.layer.Image({
    title: 'Jalan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaKabupatenLayer = new ol.layer.Image({
    title: 'Kabupaten',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kabupaten',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaKabupatenBatasLayer = new ol.layer.Image({
    title: 'Batas Kabupaten',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kabupaten_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaKecamatanLayer = new ol.layer.Image({
    title: 'Kecamatan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kecamatan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaKecamatanBatasLayer = new ol.layer.Image({
    title: 'Batas Kecamatan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kecamatan_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaKeretaJalurLayer = new ol.layer.Image({
    title: 'Jalur Kereta Api',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kereta_jalur',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    serverType: 'geoserver'
});

var polaPariwisataLayer = new ol.layer.Image({
    title: 'Pariwisata',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMATARU:pola_pariwisata',
            'FORMAT': 'img/png'
        },
        serverType: 'geoserver'
    })
});

var polaProvinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_provinsi',
            'FORMAT': 'img/png'
        },
        serverType: 'geoserver'
    })
});

var polaPemerintahanLayer = new ol.layer.Image({
    title: 'Pemerintahan',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_pemerintahan',
            'FORMAT': 'img/png'
        },
        serverType: 'geoserver'
    })
});

var polaRuangLayer = new ol.layer.Image({
    title: 'Ruang',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_ruang',
            'FORMAT': 'img/png'
        },
        serverType: 'geoserver'
    })
});

var polaTambangLayer = new ol.layer.Image({
    title: 'Tambang',
    source: new ol.source.ImageWMS({
        url: 'http://0.0.0.0:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_tambang',
            'FORMAT': 'img/png'
        },
        serverType: 'geoserver'
    })
});
// Deklarasi layer group untuk peta dasar

var petaDasar = new ol.layer.Group({
    title: 'Peta Administratif',
    openInLayerSwitcher: true,
    layers: [kabupatenLayer, kabupatenBatasLayer, kecamatanLayer, kecamatanBatasLayer, desaLayer, desaBatasLayer, provinsiLayer, pemerintahanLayer, jalanLayer, sungaiLayer]
});

var petaPola = new ol.layer.Group({
    title: 'Peta Rancang Pola',
    openInLayerSwitcher: true,
    layers: [polaProvinsiLayer, polaRuangLayer, polaDesaLayer, polaDesaBatasLayer, polaKecamatanLayer,
    polaKecamatanBatasLayer, polaKabupatenLayer, polaKabupatenBatasLayer, polaSungaiLayer, polaJalanLayer,
    polaTambangLayer, polaEnergiIndukLayer, polaAreaPariwisataLayer, polaPemerintahanLayer, polaKeretaJalurLayer,
    polaPariwisataLayer,
    ]
})

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
        petaDasar,
        petaPola
    ],
    target: 'map',
    controls: ol.control.defaults().extend([// Add a new Layerswitcher to the map
        new ol.control.LayerSwitcher()
    ]),
    view: new ol.View({
      center: ol.proj.transform([107.5853139, -6.9840138], 'EPSG:4326', 'EPSG:3857'),
      zoom: 11,
      minZoom: 9,
      maxZoom: 13
    })
});
// Add a layer switcher outside the map
var switcher = new ol.control.LayerSwitcher({
    target:$(".layerSwitcher").get(0),
    show_progress:true,
    extent: true,
    trash: true,
    oninfo: function (l) { alert(l.get("title")); }
});

map.addControl(switcher);
// Insert mapbox layer in layer switcher
function displayInLayerSwitcher(b)
{
    mapbox.set('displayInLayerSwitcher', b);
}
