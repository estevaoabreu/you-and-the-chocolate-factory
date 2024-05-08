var left_hair = document.getElementById("left_hair");
var right_hair = document.getElementById("right_hair");
var left_eyes = document.getElementById("left_eyes");
var right_eyes = document.getElementById("right_eyes");
var left_mouth = document.getElementById("left_mouth");
var right_mouth = document.getElementById("right_mouth");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var mouth = document.getElementById("mouth");
var hs = 1, es = 1, ms = 1;
document.cookie = "hairn=" + hs;
document.cookie = "eyesn=" + es;
document.cookie = "mouthn=" + ms;

left_hair.addEventListener("click", function lha() {
    if (hs > 0)
        hs--;
    else hs = 3;
    hair.src = "./images/hair" + hs + ".png";
    document.cookie = "hairn=" + hs;
});

right_hair.addEventListener("click", function rha() {
    if (hs < 3)
        hs++;
    else hs = 0;
    hair.src = "./images/hair" + hs + ".png";
    document.cookie = "hairn=" + hs;
});

left_eyes.addEventListener("click", function lea() {
    if (es > 0)
        es--;
    else es = 3;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
});

right_eyes.addEventListener("click", function rea() {
    if (es < 3)
        es++;
    else es = 0;
    eyes.src = "./images/eyes" + es + ".png";
    document.cookie = "eyesn=" + es;
});

left_mouth.addEventListener("click", function lma() {
    if (ms > 0)
        ms--;
    else ms = 3;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
});

right_mouth.addEventListener("click", function rma() {
    if (ms < 3)
        ms++;
    else ms = 0;
    mouth.src = "./images/mouth" + ms + ".png";
    document.cookie = "mouthn=" + ms;
});