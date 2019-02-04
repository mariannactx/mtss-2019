function load(){
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

    byId("menu-link").addEventListener("click", function(e) {
        e.preventDefault();
        
        var isOpen = getClass("menu").indexOf("open") > -1;
        byId("hamburger").setAttribute("class", isOpen ? "" : "open");
        byId("menu").setAttribute("class", isOpen ? "" : "open");
    });

    sizes();
};

window.addEventListener("resize", sizes);

function sizes(){
    var headerHeight = byId("header").offsetHeight;
    var footerHeight = byId("footer").offsetHeight;
    
    byId("header").style.height = headerHeight + "px";

    var pageWidth = window.innerWidth + 1;
    var pageHeight = window.innerHeight - 2 - headerHeight - footerHeight;
    
    var content = byId("content");
    content.style.height = "";
    content.style.width = pageWidth + "px";
    content.style.height = (pageHeight + 2) + "px";

    var inicial = byId("inicial");    
    inicial.style.height = "";
    inicial.style.height = (pageHeight + 2) + "px";
    
    var bg = byId("bg-image");
    bg.style.height = "";
    bg.style.width = (pageWidth + 30) + "px";
    bg.style.height = (pageHeight + 30) + "px";
}

function show(section){    
    
    inicial.style.opacity = 0;

    byId("content").setAttribute("class", "open");
    
    byId("menu-item-" + section).setAttribute("class", "menu-item open");
    byId("content-" + section).style.visibility = "visible";
    
    setTimeout(function(){ 
        inicial.style.visibility = "hidden" 
    }, 1000);
}

function hide(section){

    inicial.style.visibility = "visible"; 
    inicial.style.opacity = 1;

    byId("menu-animation-" + section).setAttribute("class", "menu-animation");
    byId("content").setAttribute("class", "");
    
    setTimeout(function(){ 
        byId("content-" + section).style.visibility = "hidden"; 
        byId("content").style.visibility = "hidden"; 
    }, 1000);
   
}

function byId(id){
    return document.getElementById(id);
}

function getClass(id){
    return byId(id).getAttribute("class");
}