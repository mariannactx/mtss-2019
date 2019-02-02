<!DOCTYPE html>
<html>
    <head>
        <title> MTSS 2019 </title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mobile.css" />
        <script src="script.js"></script>
       
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="timeline.css">

        <link rel="stylesheet" href="menu-com-imagens.css" />
        <link rel="stylesheet" href="sorteio-logo.css" />
    </head>
    <body>
        <?php include("data.php"); ?>
        <header id="header">
            <div class="menu-item"> <img src="img/Logo.png" /> </div>
            <div class="menu-item" onclick="showSection('esquerda', 'direita')">SOBRE</div>
            <div class="menu-item" onclick="showSection('direita', 'esquerda')">PROGRAMAÇÃO</div>
            <div class="menu-item" onclick="showSection('direita', 'esquerda')">APOIO</div>
            <div class="menu-item" onclick="showSection('direita', 'esquerda')">PARCEIRAS</div>
        </header>
        <main>
            <div id="menu">
                <div id="menu-esquerda">
                </div>
                <div id="menu-direita">
                </div>
                
                <div id="mtss" class="container">
                    <div id="mt" class="wrap">
                        <div class="crop">
                            <img id='mt-img' src="img/cobertura/2018-10-removebg-crop.png" />
                        </div>
                    </div>
                    <div id="ss" class="wrap">
                        <div class="crop">
                            <img id='ss-img' src="img/logo-round.png" />
                        </div>
                    </div>
                </div>

            </div>
            <div id="content">
                <div id="content-esquerda">
                    <div class="content">
                        <?php include("sobre.php") ?>
                    </div>
                </div>
                <div id="content-direita">
                    <div class="content">
                    <?php include("programacao.php") ?>
                    </div>
                </div>
            </div>

            <div id="titulo-centro">
                <h2>INSCREVA-SE <i class="fas fa-clipboard-list"></i></h2>
            </div>
        </main>
    </body>
</html>