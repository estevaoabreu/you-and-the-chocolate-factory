var violet = document.getElementById("violet");
var violetobj = document.getElementById("violetgame");
var inf = 1;
const cond = true;
var w = violet.width;
var h = violet.height;
document.cookie = "violetdone=false";

document.cookie = "sala=InventingRoom";


window.addEventListener('load', function() {
    pop.play();
});

violet.addEventListener("click", function () {
    if (inf < 400)
        inf += 25;
});

violetobj.addEventListener("click", function () {
    document.querySelector(".scene").classList.toggle("hidden");
    document.querySelector(".violetdiv").classList.toggle("hidden");
    document.querySelector(".bg").classList.toggle("blur");
});

function draw() {
    if (inf >= 0 && inf < 400)
        inf -= 1;
    else if (inf > 400 && getCookie('violetdone') != "looped")
        document.cookie = "violetdone=sim";
    if (getCookie('violetdone') == "sim") {
        document.cookie = "violetdone=looped";
        popuptoggle();
        var message = document.querySelector(".popup");
        message.src = "images/popup_invroomend.png"
        var btn = document.querySelector(".btn");
        btn.innerHTML = "Next";
        btn.setAttribute("onclick", "document.location.href = './nutroom.html';");

    }
    violet.setAttribute("width", w + inf + "px");
    violet.setAttribute("height", h + "px");
}

popuptoggle();