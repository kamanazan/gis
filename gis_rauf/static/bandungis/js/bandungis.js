// Pastikan file ini terletak setelah <div id="map" class="map"></div>
// Layer untuk peta dasar
var kabupatenLayer = new ol.layer.Image({
    title: 'Kabupaten',
    source:  new ol.source.ImageWMS({
            url: 'http://128.199.100.103:8080/geoserver/wms',
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
            url: 'http://128.199.100.103:8080/geoserver/wms',
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
            url: 'http://128.199.100.103:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    }),
    visible: true
});

var kecamatanBatasLayer = new ol.layer.Image({
    title: 'Batas Kecamatan',
    source:  new ol.source.ImageWMS({
            url: 'http://128.199.100.103:8080/geoserver/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan_batas',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver'
    }),
    visible: false
});

var desaLayer = new ol.layer.Image({
    title: 'Desa',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var desaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var provinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pemerintahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

//Layer untuk pola ruang

var polaAreaPariwisataLayer = new ol.layer.Image({
    title: 'Area Pariwisata',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_area_pariwisata',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var polaSungaiLayer = new ol.layer.Image({
    title: 'Sungai',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var polaDesaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_energi_induk',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var polaJalanLayer = new ol.layer.Image({
    title: 'Jalan',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
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
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kereta_jalur',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});

var polaPariwisataLayer = new ol.layer.Image({
    title: 'Pariwisata',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMATARU:pola_pariwisata',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaProvinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_provinsi',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaPemerintahanLayer = new ol.layer.Image({
    title: 'Pemerintahan',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_pemerintahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaRuangLayer = new ol.layer.Image({
    title: 'Ruang',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_ruang',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    })
});

var polaTambangLayer = new ol.layer.Image({
    title: 'Tambang',
    source: new ol.source.ImageWMS({
        url: 'http://128.199.100.103:8080/geoserver/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_tambang',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
    }),
    visible: false
});
// Deklarasi layer group untuk peta dasar

var petaDasar = new ol.layer.Group({
    title: 'Peta Administratif',
    openInLayerSwitcher: false,
    visible: true,
    layers: [kecamatanLayer, desaLayer, jalanLayer, sungaiLayer, pemerintahanLayer, kabupatenLayer]
});

var petaPola = new ol.layer.Group({
    title: 'Peta Rancang Pola',
    openInLayerSwitcher: false,
    layers: [polaRuangLayer, polaTambangLayer, polaEnergiIndukLayer, polaAreaPariwisataLayer, polaKeretaJalurLayer]
})

var map = new ol.Map({
    layers: [
        new ol.layer.Group({
            'title': 'Petanya',
            displayInLayerSwitcher: false,
            layers: [
                new ol.layer.Tile({
                    title: 'Stamen - Water color',
                    displayInLayerSwitcher: false,
                    type: 'base',
                    source: new ol.source.Stamen({
                        layer: 'terrain'
                    })
                }),
            ]
        }),
         petaPola,
        petaDasar
    ],
    target: 'map',
    view: new ol.View({
      center: ol.proj.transform([107.5853139, -6.9840138], 'EPSG:4326', 'EPSG:3857'),
      zoom: 13,
      minZoom: 9,
      maxZoom: 17
    })
});
// Add a layer switcher outside the map
var switcher = new ol.control.LayerSwitcher({
    target:$(".layerSwitcher").get(0),
    show_progress:true,
    extent: true,
    trash: false,
    reordering: false
});

map.addControl(switcher);
// Insert mapbox layer in layer switcher
function displayInLayerSwitcher(b)
{
    mapbox.set('displayInLayerSwitcher', b);
}
// TODO: split files
$.ajax({ 
    url: 'getdataperuntukan.php',
    type: 'post',
    dataType: 'json',
    success: function(result)
    {
        // return array of json
        var src = $.map(result, function(a){
            return a['kecamatan'];
        });
        $( "#cari_kecamatan" ).autocomplete({
            source: src,
            select: function(event, ui){ // Chaos gods perform their tricks here
                kecamatan = ui.item.value;
                $.ajax({ 
                    url: 'getdataperuntukan.php',
                    data: {"kecamatan": kecamatan},
                    type: 'post',
                    dataType: 'json',
                    success: function(result2){
                        var src2 = $.map(result2, function(b){
                            return b['desa'];
                        });
                        $("#cari_desa").autocomplete({
                            source: src2,
                            minLength: 0
                        });
                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                });
            }
        });
    }
});

$('#btn_cari').click(function(e){
    var desa = $('#cari_desa').val();
    var kecamatan = $('#cari_kecamatan').val();
    if (desa.length == 0 | kecamatan.length == 0){
        alert('Harap mengisi nama Kecamatan dan Desa');
    }
    else {
        $.ajax({
            url: 'getdataperuntukan.php',
            data: {"kecamatan": kecamatan, "desa": desa},
            type: 'post',
            dataType: 'json',
            error: function (request, status, error) {
                        console.log(request.responseText);
                    },
            success: function(r){
                // Reset active tabs
                $('#tablist div').removeClass('active');
                // point to desired tab by making it active
                $('#tab3').empty().addClass('active').append('<strong>Data Peruntukan untuk '+kecamatan+', Desa '+desa+'</strong>');
                // Pengisian data
                $('#tab3').append('<table class="table table-condensed"><thead><tr><td>Peruntukan</td><td>Luas</td></tr></thead><tbody></tbody></table>');
                for (var i = 0; i < r.length; i++){
                    $('#tab3 table tbody').append('<tr><td>'+r[i]['pola']+'</td><td>'+r[i]['luas']+'</td></tr>');
                }
            }
        });
    }
    e.preventDefault();
});
