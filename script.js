var secaoEsquerda, secaoDireita, tituloEsquerda, tituloDireita;
var pageWidth, pageHeight, headerHeight;

window.addEventListener("load", function(){
    secaoEsquerda = document.getElementById("secao-esquerda");
    secaoDireita = document.getElementById("secao-direita");

    tituloEsquerda = document.getElementById("titulo-esquerda");
    tituloDireita = document.getElementById("titulo-direita");

    headerHeight = 53;
    sizes();
});

window.addEventListener("resize", sizes);

function sizes(){
    secaoEsquerda.style.transition = "";
    secaoDireita.style.transition = "";

    pageWidth = window.innerWidth + 1;
    pageHeight = window.innerHeight - headerHeight;

    secaoEsquerda.style.borderTopWidth = pageHeight + "px";
    secaoEsquerda.style.borderRightWidth = pageWidth + "px";
    
    secaoDireita.style.borderBottomWidth = pageHeight + "px";
    secaoDireita.style.borderLeftWidth = pageWidth + "px";
     
    var menu = document.getElementById("menu");
    
    menu.style.height = "";
    var menuHeight = menu.offsetHeight;
    menu.style.height = menuHeight + "px";
    
    var menuWidth = menu.offsetWidth;
    var pontoMedio = menuWidth/2;
    
    tituloEsquerda.style.top = "-" + (menuHeight/2 - 1) + "px";
    tituloEsquerda.style.left = (pontoMedio - tituloEsquerda.offsetWidth)  + "px";
 
    tituloDireita.style.top = (menuHeight/2) + "px";
    tituloDireita.style.left = - (pontoMedio + 3) + "px";

    var b1, l1, b2, l2;

    b1 = pageHeight;
    l1 = pageWidth;
    b2 = tituloDireita.offsetHeight;
    l2 = (b2 * l1)/b1;
    
    document.getElementById("complemento").style.borderBottomWidth = (b2 - 0.2) + "px";
    document.getElementById("complemento").style.borderLeftWidth = l2 + "px";
    document.getElementById("complemento").style.left = -l2 + "px"; 


    secaoEsquerda.style.transition = ".6s all";
    secaoDireita.style.transition = ".5s all";
}

function showSection(show, hide){

    document.getElementById(show+"-content").style.display = "block";
    document.getElementById(hide+"-content").style.display = "none";

    secaoEsquerda.style.borderTopWidth = "40px"; 
    secaoDireita.style.borderLeftWidth = "8500px";

    tituloEsquerda.style.opacity = 0;
    tituloDireita.style.opacity = 0;

    setTimeout(hideSection, 2000);
}

function hideSection(){
    secaoEsquerda.style.borderTopWidth = pageHeight + "px";
    secaoDireita.style.borderLeftWidth = pageWidth + "px";

    tituloEsquerda.style.opacity = 1;
    tituloDireita.style.opacity = 1;
}