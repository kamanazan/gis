
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<link href="/static/bandungis/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
<link href="/static/bandungis/lib/jquery/jquery-ui.css" rel="stylesheet"/>
<link href="/static/bandungis/lib/openlayers/css/ol.css" rel="stylesheet"/>
<link href="/static/bandungis/lib/ol3-extended/css/layerswitchercontrol.css" rel="stylesheet"/>
<link href="/static/bandungis/lib/ol3-extended/css/style.css" rel="stylesheet"/>
<script type="text/javascript" src="/static/bandungis/lib/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/static/bandungis/lib/jquery/jquery-ui.js"></script>
<script type="text/javascript" src="/static/bandungis/lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/static/bandungis/lib/openlayers/js/ol-debug.js"></script>
<script type="text/javascript" src="/static/bandungis/lib/ol3-extended/js/layerswitchercontrol.js"></script>
<script type="text/javascript" src="http://maps.stamen.com/js/tile.stamen.js?v1.3.0"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.2.61/jspdf.min.js"></script>
<link href="/static/bandungis/css/ol_custom.css" rel="stylesheet"/>
</head>
<body>
    <div>
    <div style="position:absolute; width:380px; height: 100%; float:left; padding-left:10px; padding-right:10px;">
        <div class="form-inline">
            <div class="form-group">
                <label for="tipe_pencarian">Jenis Pencarian</label>
                <select id="tipe_pencarian">
                    <option value="nama">Nama Daerah</option> 
                    <option value="koordinat" selected="selected">Koordinat</option>
                </select>
            </div>
        </div>
        <br/>
        <form id="nama" class="hidden">
            <!-- search box -->
            <div class="form-group">
                <input class="form-control" type="text" id="cari_kecamatan" placeholder="Nama Kecamatan">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" id="cari_desa" placeholder="Nama Desa">
            </div>
            <br/>
            <button class="btn btn-primary" id="btn_cari_nama">Cari</button>
        </form>
         <form id="koordinat" class="hidden">
            <!-- search box -->
            <div class="form-group">
                <input class="form-control" type="text" id="cari_longitude" placeholder="Longitude">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" id="cari_latitude" placeholder="Latitude">
            </div>
            <br/>
            <button class="btn btn-primary" id="btn_cari_koordinat">Cari</button>
        </form>
        <button id="export-pdf">Export PDF</button>
        <!-- tabbable navigation -->
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#tab1" data-toggle="tab">Pilih Peta</a></li>
                <li><a href="#tab2" data-toggle="tab">Legenda</a></li>
				<li id="tabcontent"><a href="#tab3" data-toggle="tab">Data Peruntukan</a></li>
            </ul>
            <div class="tab-content" id="tablist" style="height: 200px;">
                <div class="tab-pane active" id="tab1">
                    <div class="layerSwitcher"></div>
                </div>
                <div class="tab-pane" id="tab2">
                    <?php
                        require('config.php');
                        echo '<img src="'.GEOURL.'/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=SIMTARU:pola_ruang"/>';
                    ?>
                </div>
				<div class="tab-pane" id="tab3" style="heigth: 200px; overflow-y: scroll;">
				</div>
            </div>
        </div>
    </div>
    <div id="map" class="map" style="height:75%; margin-left:400px;"></div>
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
    <script>
        var geourl = "<?php echo GEOURL;?>";
    </script>
    <script type="text/javascript" src="/static/bandungis/js/bandungis.js"></script>
    <script type="text/javascript" src="/static/bandungis/js/exportpdf.js"></script>
    </div>
</body>
</html>