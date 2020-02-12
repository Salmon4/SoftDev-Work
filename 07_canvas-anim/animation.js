var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var start = false;
var radius = 1;

var draw = function(e) {
    var x = 300;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
    var y = 300;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke()

    radius += 1;
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

var clear = function(e) {
    ctx.clearRect(0, 0, 600, 600)
}


var clearButton = document.getElementById("stop");
clearButton.addEventListener("click", stop);

var animateButton = document.getElementById("animate");
clearButton.addEventListener("click", draw);
