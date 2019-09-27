function init() {
  var container = document.querySelector('.container');

  for (let i = 0; i < 10; i++) {
    container.innerHTML += `<div class="circle circle-${i + 1}"></div>`;
    var circle = container.querySelector(`.circle-${i + 1}`);

    circle.style.animationDelay = `${i * 0.1}s`;
  }

  console.log(container.innerHTML);
}

init();
