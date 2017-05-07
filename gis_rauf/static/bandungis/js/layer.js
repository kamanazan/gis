var LahanLayer = new ol.layer.Image({
    title: 'Penggunaan Lahan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:02lahan_penggunaan_lahan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});



var petaLahan = new ol.layer.Group({
    title: 'Peta Penggunaan Lahan',
    openInLayerSwitcher: false,
    visible: true,
    layers: [LahanLayer]
});


var AirBangunanSadap = new ol.layer.Image({
    title: 'Bangunan Sadap',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06air_bangunan_sadap',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var AirBendunganTeknis = new ol.layer.Image({
    title: 'Bendungan Teknis',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06air_bendungan_teknis',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var AirFloodwayCisangkuy = new ol.layer.Image({
    title: 'Floodway Cisangkuy',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06air_floodway_cisangkuy',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var AirIrigasiPrimer = new ol.layer.Image({
    title: 'Saluran Irigasi Primer',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06air_saluran_irigasi_primer',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var AirIrigasiSekunder = new ol.layer.Image({
    title: 'Saluran Irigasi Sekunder',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06air_saluran_irigasi_sekunder',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var petaRencanaAir = new ol.layer.Group({
    title: 'Peta Sumberdaya Air',
    openInLayerSwitcher: false,
    visible: true,
    layers: [AirBangunanSadap, AirBendunganTeknis, AirFloodwayCisangkuy, AirIrigasiPrimer, AirIrigasiSekunder]
});

var EnergiSutt = new ol.layer.Image({
    title: 'SUTT Jawa - Bali',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06energi_sutt_jawa_bali',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});


var petaEnergi = new ol.layer.Group({
    title: 'Peta Jaringan Energi',
    openInLayerSwitcher: false,
    visible: true,
    layers: [EnergiSutt]
});

var PemukimanIpal = new ol.layer.Image({
    title: 'Pemukiman IPAL IPLT',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06pemukiman_ipal_iplt',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var PemukimanTpa = new ol.layer.Image({
    title: 'Pemukiman TPA SPA',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06pemukiman_tpa_spa',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});


var petaPemukiman = new ol.layer.Group({
    title: 'Peta Prasarana Pemukiman',
    openInLayerSwitcher: false,
    visible: true,
    layers: [PemukimanIpal, PemukimanTpa]
});

var ComTower = new ol.layer.Image({
    title: 'Menara BTS',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06telekomunikasi_menara_bts',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var ComTowerZone = new ol.layer.Image({
    title: 'Menara BTS - Zona',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06telekomunikasi_zona_menara_bts',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var ComTowerZone2 = new ol.layer.Image({
    title: 'Rencana Zona Menara BTS',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06telekomunikasi_zona_menara_bts_rencana',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});


var petaTelekomunikasi = new ol.layer.Group({
    title: 'Peta Jaringan Telekomunikasi',
    openInLayerSwitcher: false,
    visible: true,
    layers: [ComTower, ComTowerZone, ComTowerZone2]
});

var DaratTolTki = new ol.layer.Image({
    title: 'Akses Tol TKI',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_aksestol_tki',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratLingkarTolArteri = new ol.layer.Image({
    title: 'Arteri Lingkar Tol Bandung Selatan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_arteri_lingkar_tol_bandung_selatan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratGdg = new ol.layer.Image({
    title: 'BIUTR Gedebage Majalaya',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_biutr_gedebage_majalaya',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratLrt = new ol.layer.Image({
    title: 'LRT',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_lrt',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratStatusJalan = new ol.layer.Image({
    title: 'Peningkatan Status Jalan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_peningkatan_status_jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratStatusJalan = new ol.layer.Image({
    title: 'Peningkatan Status Jalan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_rencana_jalan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratTerminal = new ol.layer.Image({
    title: 'Lokasi Terminal',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_terminal',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratTolCisumdau = new ol.layer.Image({
    title: 'Tol Cisumdau',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_tol_cisumdau',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratTolLingkar = new ol.layer.Image({
    title: 'Tol Lingkar Bandung Selatan',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_tol_lingkar_bandung_selatan',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var DaratTolSoroja = new ol.layer.Image({
    title: 'Tol Soroja',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportdarat_tol_soroja',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var petaTransportasiDarat = new ol.layer.Group({
    title: 'Peta Jaringan Transportasi Darat',
    openInLayerSwitcher: false,
    visible: true,
    layers: [DaratTolCisumdau, DaratTolLingkar, DaratTolSoroja, DaratTolTki, DaratGdg, DaratLingkarTolArteri, DaratLrt, DaratTerminal, DaratStatusJalan]
});

var KeretaPeningkatan = new ol.layer.Image({
    title: 'Peningkatan Jalan Kereta Api',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportkereta_peningkatan_jalan_kereta_api',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});


var KeretaStasiun = new ol.layer.Image({
    title: 'Stasiun Kereta Api',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportkereta_stasiun_kereta_api',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var KeretaStasiunCepat = new ol.layer.Image({
    title: 'Stasiun Kereta Api Cepat',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportkereta_stasiun_kereta_api_cepat',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var KeretaTrase = new ol.layer.Image({
    title: 'Trase Kereta Api Cepat',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportkereta_trase_kereta_api_cepat',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var petaTransportasiKereta = new ol.layer.Group({
    title: 'Peta Sarana Perkereta Apian',
    openInLayerSwitcher: false,
    visible: true,
    layers: [KeretaPeningkatan, KeretaStasiun, KeretaStasiunCepat, KeretaTrase]
});

var UdaraBandara = new ol.layer.Image({
    title: 'Bandara',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportudara_bandara',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var UdaraKkop = new ol.layer.Image({
    title: 'KKOP',
    source: new ol.source.ImageWMS({
        url: geourl+'/wms',
        params: {
            'LAYERS': 'SIMTARU:06transportudara_kkop',
            'FORMAT': 'image/png'
        },
        serverType: 'geoserver',
        crossOrigin: '*'
    }),
    visible: false
});

var petaTransportasiUdara = new ol.layer.Group({
    title: 'Peta Transportasi Udara',
    openInLayerSwitcher: false,
    visible: true,
    layers: [UdaraBandara, UdaraKkop]
});