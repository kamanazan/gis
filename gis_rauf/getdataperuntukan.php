<?php
    // Connecting, selecting database
    $dbconn = pg_connect("host=localhost dbname=djangis user=fauzan")
        or die('Could not connect: ' . pg_last_error());
    // parameter menentukan jenis query yang akan dijalankan
    if(isset($_POST['kecamatan']) and isset($_POST['desa'])){
        $kecamatan = $_POST['kecamatan'];
        $desa = $_POST['desa'];
        $query = "SELECT pola,luas FROM data_peruntukan WHERE kecamatan='".$kecamatan."' AND desa='".$desa."';";
    }
    elseif(isset($_POST['kecamatan'])){
        $kecamatan = $_POST['kecamatan'];
        $query = "SELECT DISTINCT desa FROM data_peruntukan WHERE kecamatan='".$kecamatan."';";
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