var left_hair = document.getElementById("left_hair");
var right_hair = document.getElementById("right_hair");
var left_eyes = document.getElementById("left_eyes");
var right_eyes = document.getElementById("right_eyes");
var left_mouth = document.getElementById("left_mouth");
var right_mouth = document.getElementById("right_mouth");
const audio = new Audio("./sounds/popup_sound.mp3");
const audio2 = new Audio("./sounds/select-sound.mp3");

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
    audio.play();
});

right_hair.addEventListener("click", function rha() {
    if (hs < 3)
        hs++;
    else hs = 0;
    hair.src = "./images/hair" + hs + ".png";
    document.cookie = "hairn=" + hs;
    audio.play();
});

left_eyes.addEventListener("click", function lea() {
    if (es > 0)
        es--;
    else es = 3;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
    audio.play();
});

right_eyes.addEventListener("click", function rea() {
    if (es < 3)
        es++;
    else es = 0;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
    audio.play();
});

left_mouth.addEventListener("click", function lma() {
    if (ms > 0)
        ms--;
    else ms = 3;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
    audio.play();
});

right_mouth.addEventListener("click", function rma() {
    if (ms < 3)
        ms++;
    else ms = 0;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
    audio.play();
});

document.getElementById("botaodenext").addEventListener("click", function () {
    audio2.play();
    setTimeout(function () {
        window.location.href = "./factoryentrance.html";
    }, audio2.duration * 1000);
});
