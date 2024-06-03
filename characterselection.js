var left_hair = document.getElementById("left_hair");
var right_hair = document.getElementById("right_hair");
var left_eyes = document.getElementById("left_eyes");
var right_eyes = document.getElementById("right_eyes");
var left_mouth = document.getElementById("left_mouth");
var right_mouth = document.getElementById("right_mouth");

var hs, es, ms;
if (getCookie("hairn") == null) {
    hs = 1;
    document.cookie = "hairn=" + hs;
}
else hs = getCookie("hairn");
if (getCookie("eyesn") == null) {
    es = 1;
    document.cookie = "eyesn=" + es;
}
else es = getCookie("eyesn");
if (getCookie("mouthn") == null) {
    ms = 1;
    document.cookie = "mouthn=" + ms;
}
else ms = getCookie("mouthn");

var hair = document.getElementById("hair");
hair.src = "./images/hair" + hs + ".png";
var eyes = document.getElementById("eyes");
eyes.src = "./images/eyes" + es + ".png";
var mouth = document.getElementById("mouth");
mouth.src = "./images/mouth" + ms + ".png";

left_hair.addEventListener("click", function lha() {
    if (hs > 0)
        hs--;
    else hs = 3;
    hair.src = "./images/hair" + hs + ".png";
    document.cookie = "hairn=" + hs;
    arrow.play();
});

right_hair.addEventListener("click", function rha() {
    if (hs < 3)
        hs++;
    else hs = 0;
    hair.src = "./images/hair" + hs + ".png";
    document.cookie = "hairn=" + hs;
    arrow.play();
});

left_eyes.addEventListener("click", function lea() {
    if (es > 0)
        es--;
    else es = 3;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
    arrow.play();
});

right_eyes.addEventListener("click", function rea() {
    if (es < 3)
        es++;
    else es = 0;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
    arrow.play();
});

left_mouth.addEventListener("click", function lma() {
    if (ms > 0)
        ms--;
    else ms = 3;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
    arrow.play();
});

right_mouth.addEventListener("click", function rma() {
    if (ms < 3)
        ms++;
    else ms = 0;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
    arrow.play();
});

document.getElementById("botaodenext").addEventListener("click", function () {
    next.play();
    setTimeout(function () {
        if (getCookie("sala") == "ChocolateRoom")
            window.location.href = "./chocolateroom.html";
        else if (getCookie("sala") == "InventingRoom")
            window.location.href = "./inventingroom.html";
        else if (getCookie("sala") == "TelevisionRoom")
            window.location.href = "./tvroom.html";
        else if (getCookie("sala") == "NutRoom")
            window.location.href = "./nutroom.html";
        else if (getCookie("sala") == "elevator")
            window.location.href = "./elevator.html";
        else if (getCookie("sala") == "FactoryEntrance")
            window.location.href = "./factoryentrance.html";
        else if (getCookie("sala") == "openTicket")
            window.location.href = "./openticket.html";
    }, next.duration * 1000);
});
