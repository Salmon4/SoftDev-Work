var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var lastx = -1;
var lasty = -1;

var draw = function(e) {
    var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
    var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element

    if (lastx != -1 && lasty != -1){
      radius = 5;
      ctx.beginPath();
      ctx.moveTo(lastx, lasty);
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
    else {
      radius = 5;
      ctx.beginPath();//begins to draw starting at this point
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
    lastx = x;
    lasty = y;
}


var clear = function(e) {
    ctx.clearRect(0, 0, 600, 600)
}

c.addEventListener("click", draw)

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
