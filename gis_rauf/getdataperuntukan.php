<?php
    require('config.php');
    // Connecting, selecting database
    $dbconn = pg_connect("host=".DB_HOST." dbname=".DB_NAME." user=".DB_USER." password=".DB_PWD)
        or die('Could not connect: ' . pg_last_error());
    // parameter menentukan jenis query yang akan dijalankan
    if(isset($_POST['kecamatan']) and isset($_POST['desa'])){
        $kecamatan = $_POST['kecamatan'];
        $desa = $_POST['desa'];
        $query = "SELECT ST_AsText(ST_Transform(ST_SetSRID(ST_Centroid(geom), 32748), 3857)) as posisi,pola,luas FROM data_peruntukan WHERE kecamatan='".$kecamatan."' AND desa='".$desa."';";
    }
    elseif(isset($_POST['kecamatan'])){
        $kecamatan = $_POST['kecamatan'];
        $query = "SELECT DISTINCT desa FROM data_peruntukan WHERE kecamatan='".$kecamatan."';";
    }
    elseif(isset($_POST['long']) and isset($_POST['lat'])){
        $long = $_POST['long'];
        $lat = $_POST['lat'];
        /*
         * Dari file .shp proyeksinya menggunakan 32748 sementara dari openlayers proyeksinya 3857 jadi di transformasikan dulu
         * dari 32748 ke 3857
         */
        $query = "SELECT kecamatan,desa,pola,luas FROM data_peruntukan WHERE ST_Contains(ST_Transform(ST_SetSRID(geom, 32748), 3857), ST_GeometryFromText('POINT(".$long." ".$lat.")', 3857));";
    }
    else {
        $query = "SELECT DISTINCT kecamatan FROM data_peruntukan;";
    };
    $result = pg_query($query) or die('Query failed: ' . pg_last_error());
    echo json_encode(pg_fetch_all($result));
    pg_free_result($result);
    // Closing connection
    pg_close($dbconn);
?>