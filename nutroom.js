var veruca = document.getElementById("veruca");
var verucaobj = document.getElementById("verucagame");
var squirrelQuant = 0;
document.cookie = "verucadone=false";

document.cookie = "sala=NutRoom";

verucaobj.addEventListener("click", function () {
    document.querySelector(".scene").classList.toggle("hidden");
    document.querySelector(".verucadiv").classList.toggle("hidden");
    document.querySelector(".bg").classList.toggle("blur");
});

veruca.addEventListener('click', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var squirrelImage = document.createElement('img');
    squirrelImage.src = './images/squirrel.png';
    squirrelImage.classList.add('squirrel');
    squirrelImage.style.left = mouseX - 63.1125 / 2 + "px";
    squirrelImage.style.top = mouseY - 66.0875 / 2 + "px";

    if (mouseX - 63.1125 / 2 > window.innerWidth / 2) {
        squirrelImage.style.transform = 'scaleX(-1)';
    }

    document.body.appendChild(squirrelImage);

    squirrelQuant++;
    if (squirrelQuant >= 20) {
        document.cookie = "verucadone=sim";
    }
});

function draw() {
    if (getCookie('verucadone') == "sim") {
        document.cookie = "verucadone=looped";
        popuptoggle();
        var message = document.querySelector(".popup");
        message.src = "images/popup_nutroomend.png"
        var btn = document.querySelector(".btn");
        btn.innerHTML = "Next";
        btn.setAttribute("onclick", "document.location.href = './televisionroom.html';");
    }
}

popuptoggle();