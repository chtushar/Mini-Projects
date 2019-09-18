var container = document.querySelector('.container');
var dimensionFactor = 30;
var delayFactor = 50;
var numberOfSquares = 2;
function change() {
  for (let i = 0; i < numberOfSquares; i++) {
    container.innerHTML += `<div class="square square-${i + 2}"></div>`;
    var tempSquare = container.querySelector(`.square-${i + 2}`);
    tempSquare.style.width = `${dimensionFactor * (i + 2)}px`;
    tempSquare.style.height = `${dimensionFactor * (i + 2)}px`;
    tempSquare.style.animationDelay = `${delayFactor * (i + 2)}ms`;
  }
}
change();

var dimensionChange = {
  add: e => {
    numberOfSquares = numberOfSquares + 1;
    change();
  },
};
