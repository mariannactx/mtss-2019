var inscricao, sobre, tituloInscricao, tituloSobre;
var pageWidth, pageHeight, headerHeight;

window.addEventListener("load", function(){
    inscricao = document.getElementById("inscricao");
    sobre = document.getElementById("o-evento");

    tituloInscricao = document.getElementById("titulo-inscricao");
    tituloSobre = document.getElementById("titulo-o-evento");

    headerHeight = 32;
    sizes();
});

window.addEventListener("resize", sizes);

function sizes(){
    inscricao.style.transition = "";
    sobre.style.transition = "";

    pageWidth = window.innerWidth + 1;
    pageHeight = window.innerHeight - headerHeight;

    inscricao.style.borderTopWidth = pageHeight + "px";
    inscricao.style.borderRightWidth = pageWidth + "px";
    
    sobre.style.borderBottomWidth = pageHeight + "px";
    sobre.style.borderLeftWidth = pageWidth + "px";
    
    var b1, l1, b2, l2;

    b1 = pageHeight;
    l1 = pageWidth;
    b2 = tituloInscricao.offsetHeight;
    l2 = (b2 * l1)/b1;

    document.getElementById("complemento-titulo-o-evento").style.borderBottomWidth = (b2 - 0.1)  + "px";
    document.getElementById("complemento-titulo-o-evento").style.borderLeftWidth = (l2 - 5) + "px";
    document.getElementById("complemento-titulo-o-evento").style.left = (-l2 + 5) + "px"; 
         
    document.getElementById("menu").style.height = "";
    var menuHeight = document.getElementById("menu").offsetHeight;
    document.getElementById("menu").style.height = menuHeight + "px";
    
    var menuWidth = document.getElementById("menu").offsetWidth;
    var pontoMedio = menuWidth/2;
    
    var wTituloInscricao = tituloInscricao.offsetWidth;
    
    var leftTituloInscricao = pontoMedio - (wTituloInscricao) - 20;
    var leftTituloSobre = - pontoMedio - (pageWidth < 500 ? 40 : 30);
 
    tituloInscricao.style.top = "-" + (5 + menuHeight/2) + "px";
    tituloInscricao.style.left = (leftTituloInscricao)  + "px";
 
    tituloSobre.style.top = (menuHeight/2) + "px";
    tituloSobre.style.left = leftTituloSobre + "px";

    inscricao.style.transition = ".6s all";
    sobre.style.transition = ".5s all";
}

function showSection(show, hide){

    document.getElementById(show+"-content").style.display = "block";
    document.getElementById(hide+"-content").style.display = "none";

    inscricao.style.borderTopWidth = "40px"; 
    sobre.style.borderLeftWidth = "8500px";

    setTimeout(hideSection, 2000);
}

function hideSection(){
    inscricao.style.borderTopWidth = pageHeight + "px";
    sobre.style.borderLeftWidth = pageWidth + "px";
}