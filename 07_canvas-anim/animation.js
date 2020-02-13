var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var radius = 1;
var id = 0;
var direction = 1;

var draw = function(e) {
    var x = 300;
    var y = 300;
    clear();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    if (radius >= 300 || radius <= 0){
      direction *= -1;
    }
    radius += 1 * direction;
    id = window.requestAnimationFrame(draw);
}

var animate = function(e){
  if (id == 0){
    draw();
  }
}

var clear = function(e) {
    ctx.clearRect(0, 0, 600, 600)
}

var stop = function(e) {
    window.cancelAnimationFrame(id);
    id = 0;
}

var clearButton = document.getElementById("stop");
clearButton.addEventListener("click", stop);

var animateButton = document.getElementById("animate");
animateButton.addEventListener("click", animate);
