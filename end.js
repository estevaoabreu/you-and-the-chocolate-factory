var elevator = document.getElementById('elevator');
let yPos = window.innerHeight;
let speed = 0.3;
var shakeAmount = 0.2;

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
}

animateElevator();
