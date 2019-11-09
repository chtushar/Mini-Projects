var container = document.querySelector('.container');

function init() {
  for (let i = 1; i <= 13; i++) {
    container.innerHTML += `<div class="triangle triangle-${i}"><div></div></div>`;
    var shadowTriangle = container.querySelector(`.triangle-${i}`);
    var tempTriangle = shadowTriangle.querySelector(`div`);


    var heightFactor = Math.pow(3,0.5)/2;
    tempTriangle.style.width = `${30*i}px`;
    tempTriangle.style.height = `${30*i}px`;
    //tempTriangle.style.height = `${30*i*heightFactor}px`;
    tempTriangle.style.animationDelay = `${100*i}ms`;
    if (i%2 !== 0) {
      shadowTriangle.style.zIndex = `${999 - i}`;
      console.log(shadowTriangle.style.zIndex);
    }else{
      shadowTriangle.style.zIndex = `${999 - i}`;
      tempTriangle.style.backgroundColor = "#ffffff";
      console.log(shadowTriangle.style.zIndex);
    }
  }
}
init();
