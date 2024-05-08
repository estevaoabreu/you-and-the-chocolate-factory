var bilhete = document.getElementById("bilhete");
var nrcliques = 7;
var contador = 0;
var papel = document.getElementById("papel");
var portao = document.getElementById("portao");
var entrou = false;
var entrarfabrica = false;
var choco_acaba = false;
document.cookie = "sala=no";


papel.addEventListener("click", function desembrulhar() {
    contador++;
    if (contador < nrcliques)
        papel.src = "./images/papel" + contador + ".png";
    else if (contador == nrcliques) {
        popuptoggle();
        var message = document.querySelector(".popup");
        message.src = "images/popup_chocbarnext.png"
        var btn = document.querySelector(".btn");
        btn.innerHTML = "Next";
        btn.setAttribute("onclick", "document.location.href = './factoryentrance.html';");
    }
});

popuptoggle();