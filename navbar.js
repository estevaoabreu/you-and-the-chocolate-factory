if (getCookie("sala") == "ChocolateRoom")
  nomesala = "Chocolate Room";
else if (getCookie("sala") == "InventingRoom")
  nomesala = "Inventing Room";
else if (getCookie("sala") == "TelevisionRoom")
  nomesala = "Television Room";
else if (getCookie("sala") == "NutRoom")
  nomesala = "Nut Room";
else if (getCookie("sala") == "elevator")
  nomesala = "Great Glass Elevator";
else if (getCookie("sala") == "FactoryEntrance")
  nomesala = "Factory Entrance";
else nomesala = "";

var personagem = document.createElement("div");
personagem.classList.add("personagem");

navbar.innerHTML += '<img src="./images/cara.png" class="static" id="face" alt="Cara do personagem">';
personagem.innerHTML += '<img src="./images/hair' + getCookie('hairn') + '.png" class="static" id="hair" alt="Cabelo do personagem">';
personagem.innerHTML += '<img src="./images/eyes' + getCookie('eyesn') + '.png" class="static" id="eyes" alt="Olhos do personagem">';
personagem.innerHTML += '<img src="./images/mouth' + getCookie('mouthn') + '.png" class="static" id="mouth" alt="Boca do personagem">';
navbar.innerHTML += '<h1 class="nomesala">' + nomesala + '</h1>';

navbar.appendChild(personagem);