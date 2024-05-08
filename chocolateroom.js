var augustusobj = document.getElementById("augustusgame");
document.cookie = "augustusdone=false";
document.cookie = "sala=ChocolateRoom";

augustusobj.addEventListener("click", function () {
    document.querySelector(".scene").classList.toggle("hidden");
    document.querySelector(".augustusdiv").classList.toggle("hidden");
    document.querySelector(".bg").classList.toggle("blur");
});

document.addEventListener('DOMContentLoaded', () => {
    var img = new Image();
    img.src = '/images/augustus.png';
    var canvas = document.getElementById('tintedImage');
    var ctx = canvas.getContext('2d');
    var radius = 25;
    var newWidth = 246.85;
    var newHeight = 550;

    let totalNonTransparentPixels = 0;
    let changedNonTransparentPixels = 0;

    img.onload = () => {
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            var alpha = data[i + 3];
            if (alpha !== 0) {
                totalNonTransparentPixels++;
            }
        }

        function handleMouseMove(event) {
            var mouseX = event.offsetX;
            var mouseY = event.offsetY;
            console.log(mouseX, mouseY);

            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;

            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    var index = (y * canvas.width + x) * 4;
                    var alpha = data[index + 3];

                    if (alpha !== 0) {
                        var dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

                        if (dist <= radius) {
                            if (data[index] !== 76 && data[index + 1] !== 43 && data[index + 2] !== 14) {
                                data[index] = 76;
                                data[index + 1] = 43;
                                data[index + 2] = 14;
                                data[index + 3] = 255;
                                changedNonTransparentPixels++;
                            }

                            var percentChanged = (changedNonTransparentPixels / totalNonTransparentPixels) * 100;

                            if (percentChanged > 96) {
                                document.cookie = "augustusdone=sim";
                                canvas.removeEventListener('mousemove', handleMouseMove);
                            }
                        }
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
        }

        canvas.addEventListener('mousemove', handleMouseMove);
    };

    img.src = '/images/augustus.png';
});


function draw() {
    if (getCookie('augustusdone') == "sim") {
        document.cookie = "augustusdone=looped";
        popuptoggle();
        var message = document.querySelector(".popup");
        message.src = "images/popup_chocroomend.png"
        var btn = document.querySelector(".btn");
        btn.innerHTML = "Next";
        btn.setAttribute("onclick", "document.location.href = './inventingroom.html';");
    }
}

popuptoggle();