<!DOCTYPE html>
<html>
    <head>
        <title> MTSS 2019 </title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/style.4.css" />
        <link rel="stylesheet" href="css/colorsfonts.css" />
        <link rel="stylesheet" href="css/timeline.css">
        <link rel="stylesheet" href="css/animacao.css" />

        <link rel="stylesheet" href="css/mobile.css" media="(max-width: 500px)" />
        <!-- <link rel="stylesheet" href="css/menu-mobile.css" media="(max-width: 500px)" /> -->
        
        <script src="script.js"></script>
    </head>
    <body>
        <?php include("data.php"); ?>
        <header id="header">
            <div id="hamburger">
                <a href="#" id="menu-link">
                    <span class="menu-icon">
                        <span class="menu-line menu-line-1"></span>
                        <span class="menu-line menu-line-2"></span>
                        <span class="menu-line menu-line-3"></span>
                    </span>
                    <span class="text-dark-green">MENU</span>
                </a>
            </div>
            <ul id="menu" class="">
                <?php foreach($menu as $id => $titulo): ?>
                    <li 
                        id="menu-item-<?= $id ?>"
                        class="menu-item text-dark-green"
                        onclick="show('<?= $id ?>')" 
                    >
                        [<span> <?= $titulo ?> </span>]
                    </li>
                <?php endforeach; ?>
            </ul>
        </header>
        <main>
            <div id="bg-image"></div>
            <div id="inicial">
                    <div id="logo">
                        <img id="logo-in" src="img/logo-round-in.png" />
                        <img id="logo-out" src="img/logo-round-out.png" />
                    </div>
                    <div id="slogan">
<span class="slogan"> Encontro de mulheres </span>
<span class="slogan"> de TI da Paraíba </span>
<span id="local" class="slogan text-dark-green"> 30 DE MARÇO </span>
<span id="data" class="slogan"><a target="_blank" class="text-pink" href="https://www.google.com/maps/search/Lot.%20Parque%20Verde,%20Cabedelo%20,%20Loteamento%20Parque%20Verde,%20Cabedelo,%20PB,%2058033-455,%20BRASIL"><i class="fas fa-map-marker-alt"></i> IESP </a></span>
                    </div>
            </div>
            <div id="content" class="">
                <?php foreach($menu as $id => $titulo): ?>
                    <div id="content-<?= $id ?>">
                        <div class="content">
                           <span class="close"><i class="far fa-window-close" onclick="hide('<?= $id ?>')"></i></span>
                            <?php include("$id.php") ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <footer id="footer">

            <div id="parceiras">
                <span                class="text-orange">parceiras:</span>
                <span id="iesp"      class="parceiras"></span>
                <span id="conductor" class="parceiras"></span>
            </div>
                <?php include("newsletter.php") ?>
                <div>
                    <a target="_blank" href="http://instagram.com/mulhertechsimsr">
                        <span> 
                            <i class="fab fa-instagram text-pink"></i> 
                            <span class="text-dark-green">@mulher</span><span class="text-dark-green">techsimsr</span> 
                        </span>
                    </a>
                </div> 
            </footer>
        </main>
        <script>
            load();
        </script>
    </body>
</html>