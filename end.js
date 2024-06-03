var elevator = document.getElementById('elevator');
let yPos = window.innerHeight;
let speed = 0.3;
var shakeAmount = 0.2;
document.cookie = "sala=ending";
var vol = 1;

window.addEventListener('load', function () {
    rocket.play();
    fly.play();
});

function animateElevator() {
    elevator.style.display = 'block';
    yPos -= speed;
    speed *= 1.03;
    shakeAmount *= 1.025;
    var shakeOffset = shakeAmount * Math.sin(Date.now() / 100);
    elevator.style.transform = `translate(-50%, ${yPos}px) rotate(${shakeOffset}deg)`;

    if (yPos > -elevator.clientHeight) {
        requestAnimationFrame(animateElevator);
    } else {
        setTimeout(() => {
            popuptoggle();
        }, 1000);
    }
    vol -= 1 / 16;
    rocket.volume = vol;
}

animateElevator();
