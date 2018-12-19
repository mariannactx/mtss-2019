window.addEventListener("load", function(){
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight - 66;

    document.getElementById("inscricao").style.borderTopWidth = pageHeight + "px";
    document.getElementById("inscricao").style.borderRightWidth = pageWidth + "px";
    
    document.getElementById("o-evento").style.borderBottomWidth = pageHeight + "px";
    document.getElementById("o-evento").style.borderLeftWidth = pageWidth + "px";

    document.getElementById("titulo-inscricao").style.top = "-" + (pageHeight/2 - 17) + "px";
    document.getElementById("titulo-inscricao").style.left = (pageWidth/4 + 26) + "px";

    document.getElementById("titulo-o-evento").style.top = (pageHeight/2 + 30) + "px";
    document.getElementById("titulo-o-evento").style.left = (pageWidth/2 - 140) + "px";
});