var pic = document.getElementById("vimage");
var lastx = -1;
var lasty = -1;

var draw = function(e) {
    var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
    var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element

    if (lastx != -1 && lasty != -1){
      var l = document.createElementNS(
        "http://www.w3.org/2000/svg","line");
        l.setAttribute('x1', lastx);
        l.setAttribute('y1', lasty);
        l.setAttribute('x2', x);
        l.setAttribute('y2', y);
        l.setAttribute('stroke', "black");
        pic.appendChild(l);
      var c = document.createElementNS(
        "http://www.w3.org/2000/svg","circle");
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", 5);
        c.setAttribute("fill", "black");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
    }
    else {
      var c = document.createElementNS(
        "http://www.w3.org/2000/svg","circle");
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", 5);
        c.setAttribute("fill", "black");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
    }
    lastx = x;
    lasty = y;
}


var clear = function(e) {
  while (pic.lastChild){
    pic.removeChild(pic.lastChild);
  }
  lastx = -1;
  lasty = -1;
}

pic.addEventListener("click", draw)
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
