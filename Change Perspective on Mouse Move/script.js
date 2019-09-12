var container = document.getElementById('container');
var inner = document.getElementById('inner');

var mouse = {      //Mouse Object
  _x: 0,      //x coordinate of origin
  _y: 0,      //y coordinate of origin
  x: 0,
  y: 0,

  updatePosition: function (event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y)*-1;
  },
  setOrigin: function (e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() {return `(${this.x},${this.y})`;}
}
var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;  //Returns true when counter === updateRate
};

mouse.setOrigin(container);

var update = function(e) {
  mouse.updatePosition(e);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/2).toFixed(2),
    (mouse.x / inner.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = `rotateX(${x}deg) rotateY(${y}deg)`;
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;         //Firefox
  inner.style.msTransform = style;          //Edge
  inner.style.oTransform = style;           //Opera
};

var onMouseMoveIN = function (e) {
  update(e);
};

var onMouseMoveOUT = function (e) {
  inner.style = "";
};

var onMouseMoveOVER = function (e) {
  if (isTimeToUpdate()) {
    update(e);
  }
};


container.onmouseenter = onMouseMoveIN;
container.onmouseleave = onMouseMoveOUT;
container.onmousemove = onMouseMoveOVER;