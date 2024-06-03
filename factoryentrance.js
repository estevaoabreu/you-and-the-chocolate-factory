document.cookie = "sala=FactoryEntrance";

popuptoggle();

window.addEventListener('load', function () {
  pop.play();
});


document.getElementById("portao").addEventListener("mouseover", somportao);
document.getElementById("portao").addEventListener("mouseout", somportao);

function somportao() {
  gate.play();
}