var inscricao, sobre, tituloInscricao, tituloSobre;
window.addEventListener("load", function(){
    inscricao = document.getElementById("inscricao");
    sobre = document.getElementById("o-evento");

    tituloInscricao = document.getElementById("titulo-inscricao");
    tituloSobre = document.getElementById("titulo-o-evento");

    sizes();
});

window.addEventListener("resize", sizes);

function sizes(){
    inscricao.style.transition = "";
    sobre.style.transition = "";

    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight - 66;

    inscricao.style.borderTopWidth = pageHeight + "px";
    inscricao.style.borderRightWidth = pageWidth + "px";
    
    sobre.style.borderBottomWidth = pageHeight + "px";
    sobre.style.borderLeftWidth = pageWidth + "px";
    
    var b1, l1, b2, l2;

    b1 = pageHeight;
    l1 = pageWidth;

    b2 = 39.5;
    l2 = (b2 * l1)/b1;

    document.getElementById("complemento-titulo-o-evento").style.borderBottomWidth = b2 + "px";
    document.getElementById("complemento-titulo-o-evento").style.borderLeftWidth = l2 + "px";
    document.getElementById("complemento-titulo-o-evento").style.left = (-l2 - 6) + "px"; 
         
    document.getElementById("menu").style.height = "";
    var menuHeight = document.getElementById("menu").offsetHeight;
    document.getElementById("menu").style.height = menuHeight + "px";
    
    tituloInscricao.style.top = "-" + (menuHeight/2 + 55) + "px";
    tituloSobre.style.top = (menuHeight/2 - 55) + "px";
    
    var menuWidth = document.getElementById("menu").offsetWidth;
    var pontoMedio = menuWidth/2;
    
    var wTituloInscricao = tituloInscricao.offsetWidth;
    
    var leftTituloInscricao = pontoMedio - (wTituloInscricao - l2);
    var leftTituloSobre = - pontoMedio + ( (l2/2) + 10 );
 
    tituloInscricao.style.left = leftTituloInscricao + "px";
    tituloSobre.style.left = leftTituloSobre + "px";

    inscricao.style.transition = ".5s all";
    sobre.style.transition = ".5s all";
}

function showSection(section){
    inscricao.style.borderTopWidth = 0; 
    sobre.style.borderLeftWidth = "8500px";
}

function hideSection(){
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight - 66;

    inscricao.style.borderTopWidth = pageHeight + "px";
    sobre.style.borderLeftWidth = pageWidth + "px";
}