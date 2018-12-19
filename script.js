window.addEventListener("load", function(){
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight - 66;

    var inscricao = document.getElementById("inscricao");
    var sobre = document.getElementById("o-evento");
    
    inscricao.style.borderTopWidth = pageHeight + "px";
    inscricao.style.borderRightWidth = pageWidth + "px";
    sobre.style.borderBottomWidth = pageHeight + "px";
    sobre.style.borderLeftWidth = pageWidth + "px";
    
    var tituloInscricao = document.getElementById("titulo-inscricao");
    var tituloSobre = document.getElementById("titulo-o-evento");
    
    var menuHeight = document.getElementById("menu").offsetHeight;
    tituloInscricao.style.top = "-" + (menuHeight/2 - 17) + "px";
    tituloSobre.style.top = (menuHeight/2 - 70) + "px";
    
    var menuWidth = document.getElementById("menu").offsetWidth;
    var pontoMedio = menuWidth/2;
    
    var wTituloInscricao = tituloInscricao.offsetWidth;
    var leftTituloInscricao = pontoMedio - (wTituloInscricao - 20);

    var leftTituloSobre = - pontoMedio - 20;

    tituloInscricao.style.left = leftTituloInscricao + "px";
    tituloSobre.style.left = leftTituloSobre + "px";
});