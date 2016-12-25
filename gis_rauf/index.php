
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
</head>
<!---->
<body>
    <nav role="navigation" class="navbar navbar-default">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">PETA DASAR</a>
        </div>
    </nav>
    <div>
    <div style="position:absolute; width:380px; height: 100%; float:left; padding-left:10px; padding-right:10px;">
        <form>
            <!-- search box -->
            <div class="form-group">
                <input class="form-control" type="text" id="cari_kecamatan" placeholder="Nama Kecamatan">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" id="cari_desa" placeholder="Nama Desa">
            </div>
            <br/>
            <button class="btn btn-primary" id="btn_cari">Cari</button>
        </form>
        <!-- tabbable navigation -->
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#tab1" data-toggle="tab">Pilih Peta</a></li>
                <li><a href="#tab2" data-toggle="tab">Legenda</a></li>
				<li><a href="#tab3" data-toggle="tab">Data Peruntukan</a></li>
            </ul>
            <div class="tab-content" id="tablist" style="height: 200px;">
                <div class="tab-pane active" id="tab1">
                    <div class="layerSwitcher"></div>
                </div>
                <div class="tab-pane" id="tab2">
                    <img src="http://128.199.100.103:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=SIMTARU:pola_ruang"/>
                </div>
				<div class="tab-pane" id="tab3" style="heigth: 200px; overflow-y: scroll;">
                    <?php
                        // Connecting, selecting database
                        $dbconn = pg_connect("host=localhost dbname=djangis user=fauzan")
                            or die('Could not connect: ' . pg_last_error());

                        // Performing SQL query
                        $query = 'SELECT kecamatan,desa,pola as Peruntukan,luas FROM data_peruntukan';
                        $result = pg_query($query) or die('Query failed: ' . pg_last_error());

                        // Printing results in HTML
                        echo "<table class='table-stripped'>\n";
                        while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
                            echo "\t<tr>\n";
                            foreach ($line as $col_value) {
                                echo "\t\t<td>$col_value</td>\n";
                            }
                            echo "\t</tr>\n";
                        }
                        echo "</table>\n";

                        // Free resultset
                        pg_free_result($result);

                        // Closing connection
                        pg_close($dbconn);
                    ?>
				</div>
            </div>
        </div>
    </div>
    <div id="map" class="map" style="height:100%; margin-left:400px;"></div>
    <script type="text/javascript" src="/static/bandungis/js/bandungis.js"></script>
    </div>
<footer/>
</body>
</html>