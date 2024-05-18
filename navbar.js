if (getCookie("sala") == "ChocolateRoom") {
  nomesala = "Chocolate Room";
  document.cookie = "roomcolor=#603814";
}
else if (getCookie("sala") == "InventingRoom") {
  nomesala = "Inventing Room";
  document.cookie = "roomcolor=#b560a4";
}
else if (getCookie("sala") == "TelevisionRoom") {
  nomesala = "Television Room";
  document.cookie = "roomcolor=#fdfef9";
}
else if (getCookie("sala") == "NutRoom") {
  nomesala = "Nut Room";
  document.cookie = "roomcolor=#6095bd";
}
else if (getCookie("sala") == "elevator") {
  nomesala = "Great Glass Elevator";
  document.cookie = "roomcolor=#dff5ff";
}
else if (getCookie("sala") == "FactoryEntrance") {
  nomesala = "Factory Entrance";
  document.cookie = "roomcolor=#3e424b";
}
else if (getCookie("sala") == "openTicket") {
  nomesala = "";
  document.cookie = "roomcolor=#ed1c24";
}
else nomesala = "";

var personagem = document.createElement("div");
personagem.classList.add("personagem");

navbar.innerHTML += '<a href="./characterselection.html"><img src="./images/cara.png" class="static" id="face" alt="Cara do personagem"></a>';
personagem.innerHTML += '<a href="./characterselection.html"><img src="./images/hair' + getCookie('hairn') + '.png" class="static" id="hair" alt="Cabelo do personagem"></a>';
personagem.innerHTML += '<a href="./characterselection.html"><img src="./images/eyes' + getCookie('eyesn') + '.png" class="static" id="eyes" alt="Olhos do personagem"></a>';
personagem.innerHTML += '<a href="./characterselection.html"><img src="./images/mouth' + getCookie('mouthn') + '.png" class="static" id="mouth" alt="Boca do personagem"></a>';
navbar.innerHTML += '<h1 class="nomesala">' + nomesala + '</h1>';

document.getElementById("navbar").setAttribute("style", "background-color:" + getCookie("roomcolor") + ";");
if (getCookie("sala") == "TelevisionRoom" || getCookie("sala") == "elevator")
  document.querySelector(".nomesala").setAttribute("style", "color: black;");

navbar.appendChild(personagem);