var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var isToggled = true;

var draw = function(e) {
    var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
    var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element

    if (isToggled) ctx.fillRect(x, y, 25, 15);
    else {
        radius = 10;
        ctx.beginPath();//begins to draw starting at this point
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

var toggle = function(e) {
    isToggled = !isToggled;
    if (isToggled) toggleButton.innerHTML = "Draw-a-rectangle Mode";
    else toggleButton.innerHTML = "Draw-a-dot Mode";
}

var clear = function(e) {
    ctx.clearRect(0, 0, 600, 600)
}

c.addEventListener("click", draw)

var toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", toggle);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
