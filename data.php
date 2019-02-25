<?php 
    $str = file_get_contents('data.json');
    $json = json_decode($str, true);

    $programacao = $json["programacao"];
    $menu = $json["menu"];
?>