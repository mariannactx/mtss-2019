<?php 
    $str = file_get_contents('data.json');
    $json = json_decode($str, true);

    $programacao = $json["programacao"];
    $menu = $json["menu"];

    $bg = !empty($_GET["bg"]) ? $_GET["bg"] : 0;
    
    $bgs = $json["bg"];
    
    $bg_style = "";
    
    foreach($bgs[$bg] as $prop => $value){
        $bg_style = "{$bg_style} $prop: $value;";
    }
?>