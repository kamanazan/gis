// Pastikan file ini terletak setelah <div id="map" class="map"></div>
// Layer untuk peta dasar
var kabupatenLayer = new ol.layer.Image({
    title: 'Kabupaten',
    source:  new ol.source.ImageWMS({
            url: geourl+'/wms',
            params: {
                'LAYERS': 'SIMTARU:kabupaten',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver',
            crossOrigin: '*'
    })
});

var kabupatenBatasLayer = new ol.layer.Image({
    title: 'Batas Kabupaten',
    source:  new ol.source.ImageWMS({
            url: geourl+'/wms',
            params: {
                'LAYERS': 'SIMTARU:kabupaten_batas',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver',
            crossOrigin: '*'
    })
});

var kecamatanLayer = new ol.layer.Image({
    title: 'Kecamatan',
    source:  new ol.source.ImageWMS({
            url: geourl+'/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver',
            crossOrigin: '*'
    }),
    visible: true
});

var kecamatanBatasLayer = new ol.layer.Image({
    title: 'Batas Kecamatan',
    source:  new ol.source.ImageWMS({
            url: geourl+'/wms',
            params: {
                'LAYERS': 'SIMTARU:kecamatan_batas',
                'FORMAT': 'image/png'
            },
            serverType: 'geoserver',
            crossOrigin: '*'
    }),
    visible: false
});

var desaLayer = new ol.layer.Image({
    title: 'Desa',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var desaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:desa_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var jalanLayer = new ol.layer.Image({
    title: 'Jalan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var provinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:provinsi',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var sungaiLayer = new ol.layer.Image({
    title: 'Sungai',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:sungai',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var pemerintahanLayer = new ol.layer.Image({
    title: 'Pusat Pemerintahan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pemerintahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

//Layer untuk pola ruang

var polaAreaPariwisataLayer = new ol.layer.Image({
    title: 'Area Pariwisata',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_area_pariwisata',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var polaSungaiLayer = new ol.layer.Image({
    title: 'Sungai',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_aliran_sungai',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaDesaLayer = new ol.layer.Image({
    title: 'Desa',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_desa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var polaDesaBatasLayer = new ol.layer.Image({
    title: 'Batas Desa',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_desa_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaEnergiIndukLayer = new ol.layer.Image({
    title: 'Energi Induk',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_energi_induk',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var polaJalanLayer = new ol.layer.Image({
    title: 'Jalan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaKabupatenLayer = new ol.layer.Image({
    title: 'Kabupaten',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kabupaten',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaKabupatenBatasLayer = new ol.layer.Image({
    title: 'Batas Kabupaten',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kabupaten_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaKecamatanLayer = new ol.layer.Image({
    title: 'Kecamatan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kecamatan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaKecamatanBatasLayer = new ol.layer.Image({
    title: 'Batas Kecamatan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kecamatan_batas',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaKeretaJalurLayer = new ol.layer.Image({
    title: 'Jalur Kereta Api',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_kereta_jalur',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var polaPariwisataLayer = new ol.layer.Image({
    title: 'Pariwisata',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMATARU:pola_pariwisata',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaProvinsiLayer = new ol.layer.Image({
    title: 'Provinsi',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_provinsi',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaPemerintahanLayer = new ol.layer.Image({
    title: 'Pemerintahan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_pemerintahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaRuangLayer = new ol.layer.Image({
    title: 'Ruang',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_ruang',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    })
});

var polaTambangLayer = new ol.layer.Image({
    title: 'Tambang',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:pola_tambang',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
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
/*
lg = http://127.0.0.1:8080/geoserver/rest/workspaces/SIMTARU/layergroups/peta_rancang_pola.json
group_title = lg['layerGroup']['title']
list_layer = lg['layerGroup']['publishables']['published']
*/
 /**
  * Elements that make up the popup.
  */
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');


/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
element: container,
autoPan: true,
autoPanAnimation: {
    duration: 250
}
}));


/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

var mousePositionControl = new ol.control.MousePosition({
    className: 'ol-custom-mouseposition',
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    undefinedHTML: '&nbsp;'
});

var overviewMapControl = new ol.control.OverviewMap({
    className: 'ol-overviewmap ol-custom-overviewmap',
    collapseLabel: '\u00BB',
    label: '\u00AB',
    collapsed: false,
    layers: [
        new ol.layer.Tile({
            title: 'Stamen - Water color',
            type: 'base',
            source: new ol.source.Stamen({
                layer: 'terrain'
            })
        }),
    ]
});
 var raster = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
var map = new ol.Map({
    layers: [
        new ol.layer.Group({
            'title': 'Petanya',
            displayInLayerSwitcher: false,
            layers: [
                raster,
            ]
        }),
         petaPola,
        petaDasar
    ],
    controls: [
        mousePositionControl,
        new ol.control.ZoomSlider(),
        new ol.control.ScaleLine(),
        overviewMapControl
    ],
    overlays: [overlay],
    target: 'map',
    view: new ol.View({
      center: ol.proj.transform([107.5853139, -6.9840138], 'EPSG:4326', 'EPSG:3857'),
      zoom: 13,
      minZoom: 9,
      maxZoom: 17
    })
});
 /**
 * Add a click handler to the map to render the popup.
 */
map.on('singleclick', function(evt) {
    // proyeksi coordinate 3857 untuk internal map
    var coordinate = evt.coordinate;
    map.getView().setCenter(coordinate);
    overlay.setPosition(coordinate);
    content.innerHTML = '<code>loading...</code>';
    // untuk interface pake proyeksi 4326
    var newpos = ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326') 
    $.ajax({
        url: 'getdataperuntukan.php',
        data: {"long": coordinate[0], "lat": coordinate[1]},
        type: 'post',
        dataType: 'json',
        error: function (request, status, error) {
                    console.log(request.responseText);
                },
        success: function(r){
            if (r.length > 0){
                for (var i = 0; i < r.length; i++){
                    content.innerHTML = '<p><strong>'+r[i]['kecamatan']+'</strong></p><p><strong>'+'Desa '+r[i]['desa']+'</strong></p><p>Peruntukan: '+r[i]['pola']+'</p><p>Luas: '+r[i]['luas']+'</p><code>' + newpos +'</code>';
                }
            } else {
                content.innerHTML = '<p>Tidak ada data peruntukan di koordinat ini</p><code>' + newpos +'</code>';
            };
        }
    });
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
            select: function(event, ui){
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
    },
    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
});

$('#tipe_pencarian').change(function() {
    var val = $(this).val();
    $('#nama').addClass('hidden');
    $('#koordinat').addClass('hidden');
    $('#' + val).removeClass('hidden');
}).change();

$('#btn_cari_koordinat').click(function(e){
    var long =$('#cari_longitude').val();
    var lat = $('#cari_latitude').val();
    if (long.length == 0 | lat.length == 0){
        alert('Harap mengisi koordinat');
    }
    else {
        var newpos = ol.proj.transform([ parseFloat(long),  parseFloat(lat)], 'EPSG:4326', 'EPSG:3857');
        map.getView().setCenter(newpos);
        overlay.setPosition(newpos);
        map.getView().setZoom(17);
        content.innerHTML = '<code>loading...</code>';
        $.ajax({
            url: 'getdataperuntukan.php',
            data: {"long": newpos[0], "lat":newpos[1]},
            type: 'post',
            dataType: 'json',
            error: function (request, status, error) {
                        console.log(request);
                        console.log(status);
                        console.log(error);
                    },
            success: function(r){
                if (r.length > 0){
                    for (var i = 0; i < r.length; i++){
                        content.innerHTML = '<p><strong>'+r[i]['kecamatan']+'</strong></p><p><strong>'+'Desa '+r[i]['desa']+'</strong></p><p>Peruntukan: '+r[i]['pola']+'</p><p>Luas(m<sup>2</sup>): '+r[i]['luas']+'</p><code>' + long+','+lat +'</code>';
                    }
                } else {
                    content.innerHTML = '<p>Tidak ada data peruntukan di koordinat ini</p><code>' + newpos +'</code>';
                };
            }
        });
    }
    e.preventDefault();
});

$('#btn_cari_nama').click(function(e){
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
                $('.tabbable li').removeClass('active');
                $('#tabcontent').addClass('active')
                $('#tablist div').removeClass('active');
                // point to desired tab by making it active
                if (typeof r.length == "undefined"){
                    $('#tab3').empty().addClass('active').append('<strong>Tidak ada data</strong>');
                } else {
                    $('#tab3').empty().addClass('active').append('<strong>Data Peruntukan untuk '+kecamatan+', Desa '+desa+'</strong>');
                    // Pengisian data
                    $('#tab3').append('<table class="table table-condensed"><thead><tr><td>Peruntukan</td><td>Luas(m<sup>2</sup>)</td></tr></thead><tbody></tbody></table>');
                    for (var i = 0; i < r.length; i++){
                        $('#tab3 table tbody').append('<tr><td>'+r[i]['pola']+'</td><td>'+r[i]['luas']+'</td></tr>');
                    }
                }
                
            }
        });
    }
    e.preventDefault();
});
