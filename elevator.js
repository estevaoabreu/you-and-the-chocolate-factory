var buttonsE = [];
var shake = 0;
var vol = 0;

document.cookie = "sala=elevator";

window.addEventListener('load', function() {
    pop.play();
});

var buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.flexWrap = 'wrap';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.height = '100vh';
buttonContainer.style.padding = '70px';
buttonContainer.style.boxSizing = 'border-box';

for (let i = 0; i < 8; i++) {
    buttonsE[i] = document.createElement('img');
    buttonsE[i].src = './images/elevator_btn_u' + (i + 1) + '.png';
    buttonsE[i].style.width = '150px';
    buttonsE[i].style.height = 'auto';
    buttonsE[i].style.margin = '50px';
    buttonsE[i].style.cursor = 'pointer';
    buttonsE[i].classList.add('static');

    buttonsE[i].addEventListener('click', function () {
        if(shake == 0){
            rocket.play();
            rocket.loop = true;}
        if (this.src.includes('elevator_btn_u' + (i + 1) + '.png')) {
            this.src = './images/elevator_btn_a' + (i + 1) + '.png';
            shake++;
            vol += 1/8;
        } else {
            this.src = './images/elevator_btn_u' + (i + 1) + '.png';
            if (shake > 8)
                shake = 8;
            shake--;
            vol -= 1/8;
        }
        rocket.volume = vol;
    });

    buttonContainer.appendChild(buttonsE[i]);
}

var row1 = document.createElement('div');
row1.style.display = 'flex';
row1.style.justifyContent = 'center';
row1.style.flexBasis = '100%';
for (var i = 0; i < 4; i++) {
    row1.appendChild(buttonsE[i]);
}

var row2 = document.createElement('div');
row2.style.display = 'flex';
row2.style.justifyContent = 'center';
row2.style.flexBasis = '100%';
for (var i = 4; i < 8; i++) {
    row2.appendChild(buttonsE[i]);
}

row1.classList.add('row1');
row2.classList.add('row2');
buttonContainer.appendChild(row1);
buttonContainer.appendChild(row2);

document.body.appendChild(buttonContainer);

function shakeScreen(shakeIntensity) {
    const intensity = shakeIntensity * 5;

    const randomXOffset = Math.random() * intensity - intensity / 2;
    const randomYOffset = Math.random() * intensity - intensity / 2;
    window.scrollBy(randomXOffset, randomYOffset);

    requestAnimationFrame(() => {
        shakeScreen(shake);
    });

    if (shake >= 8 && shake <= 17) {
        shake += 0.05;
    }
    else if (shake > 17)
        document.location.href = './end.html';
}

shakeScreen(shake);
popuptoggle();