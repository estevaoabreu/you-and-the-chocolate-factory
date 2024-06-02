var imagens = document.querySelectorAll("img");
var navbar = document.getElementById("navbar");
var nomesala;
const pop = new Audio("./sounds/pop.mp3");
const next = new Audio("./sounds/next.mp3");
const arrow = new Audio("./sounds/arrow.mp3");
const click = new Audio("./sounds/click.mp3");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

for (var i = 0; i < imagens.length; i++) {
  if (!imagens[i].classList.contains("static")) {
    imagens[i].setAttribute("onmouseover", "ativar(this)");
    imagens[i].setAttribute("onmouseout", "desativar(this)");
    imagens[i].style.cursor = "pointer";
  }
  if (imagens[i].classList.contains("obj"))
    imagens[i].setAttribute("onclick", "popup(this)");
}

function ativar(img) {
  var titulo = img.id.toString() + '_active.png';
  img.src = "images/" + titulo;
}

function desativar(img) {
  var titulo = img.id.toString() + '_unactive.png';
  img.src = "images/" + titulo;
}

function popuptoggle() {
  var popup = document.querySelector(".popup");
  var btn = document.querySelector(".btn");
  popup.classList.toggle("hidden");
  btn.classList.toggle("hidden");
  btn.setAttribute("onclick", "popuptoggle()");
  pop.play();
}

function popup(img) {
  var titulo = img.id.toString() + '.png';
  var btn = document.querySelector(".btn");
  var popup = document.querySelector(".popup");
  var popupdiv = document.querySelector(".popupdiv");
  popuptoggle();
  popup.src = "./images/popup_" + titulo;
  btn.setAttribute("onclick", "popuptoggle()");
  if (img.classList.contains("obj")) {
    popupdiv.className = "";
    popupdiv.classList.add("popupdiv");
    popupdiv.classList.add(img.id.toString());
  }
}

if (getCookie('hairn') == "")
  document.cookie = "hairn=1";
if (getCookie('eyesn') == "")
  document.cookie = "eyesn=1";
if (getCookie('mouthn') == "")
  document.cookie = "mouthn=1";

document.getElementById("botaonext").addEventListener("click", function() {
  click.play();
});