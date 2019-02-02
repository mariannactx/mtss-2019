var menuEsquerda, menuDireita, mtss, mt, ss, mtImage, ssImage;
var pageWidth, pageHeight, headerHeight, pontoMedioX, pontoMedioY;

window.addEventListener("load", function(){
    
    mtss = document.getElementById("mtss");
    mt = document.getElementById("mt");
    ss = document.getElementById("ss");
    mtImage = document.getElementById("mt-img");
    ssImage = document.getElementById("ss-img");

    menuEsquerda    = document.getElementById("menu-esquerda");
    menuDireita     = document.getElementById("menu-direita");
    contentEsquerda = document.getElementById("content-esquerda");    
    contentDireita  = document.getElementById("content-direita");

    var togglesPalestra = document.getElementsByClassName("timeline__toggle");
    var contents = document.getElementsByClassName("timeline__content");

    for (var t in togglesPalestra){
        var toggle = togglesPalestra[t];

        if(typeof(toggle) == "object"){
            toggle.addEventListener("click", function(e){
                var parent = e.target.parentNode;

                if(parent.getAttribute("class").indexOf("show") <= 0){
                    parent.setAttribute("class", "timeline__content show")
                    
                    for (var c in contents){
                        if(typeof(contents[c]) == "object" && contents[c] != parent){
                            contents[c].setAttribute("class", "timeline__content")
                        }
                    }

                } else {
                    parent.setAttribute("class", "timeline__content")
                }
            })
        }
    }

    var n = [];
    while(n.length < 2){
        var random = Math.floor(Math.random()*16) + 1;
        if(n.indexOf(random) > -1) continue;
        n.push(random);
    }

    headerHeight = 53;
    sizes();

    setInterval(function(){
        mt.setAttribute("class", "wrap hide")
        ss.setAttribute("class", "wrap hide")

        setTimeout(function(){
            if(mtImage.src.indexOf("10") > 0){
                mtImage.src = "img/cobertura/2018-9-removebg-crop.png";
            } else {
                mtImage.src = "img/cobertura/2018-10-removebg-crop.png";
            }

            mt.setAttribute("class", "wrap")
            ss.setAttribute("class", "wrap")
        }, 500);
    }, 3000);
    
});

window.addEventListener("resize", sizes);

function sizes(){
    menuEsquerda.style.transition   = "";
    menuDireita.style.transition    = "";

    pageWidth = window.innerWidth + 1;
    pageHeight = window.innerHeight - 1 - headerHeight;

    menuEsquerda.style.borderTopWidth = pageHeight + "px";
    menuEsquerda.style.borderRightWidth = pageWidth + "px";
    
    menuDireita.style.borderBottomWidth = pageHeight + "px";
    menuDireita.style.borderLeftWidth = pageWidth + "px";
     
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");
    
    menu.style.height = "";
    content.style.height = "";
    var menuHeight = menu.offsetHeight;
    menu.style.height = menuHeight + "px";
    content.style.height = menuHeight + "px";

    var b1 = pageHeight;
    var l1 = pageWidth;
    
    pontoMedioX = pageWidth/2;
    pontoMedioY = pageHeight/2;

    menuEsquerda.style.transition   = ".6s all";
    menuDireita.style.transition    = ".5s all";

    // teorema de pitagoras: (d * d) = (l1 * l1) + (b2 * b2)
    // (d)iagonal, (l)argura, (b) altura
    var d = Math.sqrt((l1 * l1) + (b1 * b1));
   
    var cos = b1 / d;
    var angle = 90 - (Math.acos(cos) * 180 / Math.PI);
    
    mt.style.width = d + "px";
    ss.style.width = d + "px";

    mt.style.transform = "rotate(-" + angle + "deg)";
    ss.style.transform = "rotate(-" + angle + "deg)";

    mtImage.style.transform = "rotate(" + angle + "deg)";
    ssImage.style.transform = "rotate(" + (angle + 4) + "deg)";
}

function showSection(show, hide){
    
        menu.style.background = "transparent"; 
        
        document.getElementById("content-" + show).style.visibility = "visible";
        document.getElementById("content-" + hide).style.visibility = "hidden";
        
        menuEsquerda.style.opacity  = 0;
        menuDireita.style.opacity   = 0
        
        mt.setAttribute("class", "wrap hide")
        ss.setAttribute("class", "wrap hide")
        
        setTimeout(function(){ 
            menu.style.visibility = "hidden" 
        }, 2000);
}

function hideSection(){
    menu.style.visibility = "visible";
    menu.style.background = "#fff"; 
    
    var b1 = pageHeight;
    var l1 = pageWidth;
    
    menuEsquerda.style.borderTopWidth = b1 + "px";
    menuDireita.style.borderLeftWidth = l1 + "px";

    menuEsquerda.style.opacity  = 1;
    menuDireita.style.opacity   = 1;

    mt.setAttribute("class", "wrap")
    ss.setAttribute("class", "wrap")

}