var mike = document.getElementById("mike");
var mikeobj = document.getElementById("mikegame");
document.cookie = "mikedone=false";
var isResizing = false;
var originalMouseX;
var originalMouseY;
var originalWidth;
var originalHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

document.cookie = "sala=TelevisionRoom";


window.addEventListener('load', function() {
    pop.play();
});
mikeobj.addEventListener("click", function () {
    document.querySelector(".scene").classList.toggle("hidden");
    document.querySelector(".mikediv").classList.toggle("hidden");
    document.querySelector(".bg").classList.toggle("blur");
});

mike.addEventListener('mousedown', (event) => {
    event.preventDefault();
    originalMouseX = event.clientX;
    originalMouseY = event.clientY;
    originalWidth = mike.clientWidth;
    originalHeight = mike.clientHeight;
    isResizing = true;
});

document.addEventListener('mousemove', (event) => {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var widthChange = mouseX - originalMouseX;
    var heightChange = mouseY - originalMouseY;

    var newWidth = constrain(originalWidth + widthChange, windowWidth * 0.01, windowWidth);
    var newHeight = constrain(originalHeight + heightChange, windowHeight * 0.05, windowHeight);

    if (newWidth <= windowWidth * 0.01 && newHeight <= windowHeight * 0.05 && getCookie('mikedone') == "false") {
        document.cookie = "mikedone=sim";
        isResizing = false;
    } else if (isResizing && getCookie('mikedone') == "false") {
        mike.style.width = newWidth + "px";
        mike.style.height = newHeight + "px";
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
});

function draw() {
    if (getCookie('mikedone') == "sim") {
        document.cookie = "mikedone=looped";
        popuptoggle();
        var message = document.querySelector(".popup");
        message.src = "images/popup_tvroomend.png"
        var btn = document.querySelector(".btn");
        btn.innerHTML = "Next";
        btn.setAttribute("onclick", "document.location.href = './elevator.html';");
    }
}

popuptoggle();
