var pic = document.getElementById("vimage");
var dvdId;

var drawRandom = function(e){
  console.log("hello");
}

var draw = function(e) {
  var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
  var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element
  if (e.target.id == "vimage"){
    var c = document.createElementNS(
      "http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 15);
      c.setAttribute("fill", "black");
      c.setAttribute("stroke", "black");
      c.setAttribute("dirX", 1);
      c.setAttribute("dirY", 1);
      c.addEventListener("click", function() {
          if (c.getAttribute("fill") == "black"){
            c.setAttribute("fill","cyan");
          }
          else{
            c.setAttribute("cx", Math.random() * 501);
            c.setAttribute("cy", Math.random() * 501);
            c.setAttribute("fill","black");
          }
      });
    pic.appendChild(c);
  }
}

var move = function(e) {
  window.cancelAnimationFrame(dvdId);
  var allCircles = document.getElementsByTagName("circle");
  for (var i = 0; i < allCircles.length; i++){
    var circle = allCircles[i];
    var x = parseInt(circle.getAttribute("cx"));
    var y = parseInt(circle.getAttribute("cy"));
    var dirX = parseInt(circle.getAttribute("dirX"));
    var dirY = parseInt(circle.getAttribute("dirY"));
    circle.setAttribute("cx", x + dirX);
    circle.setAttribute("cy", y + dirY);
    if (x + 15 > 500){
      circle.setAttribute("dirX", -1);
    }
    else if (x - 15 < 0){
      circle.setAttribute("dirX", 1);
    }
    if (y + 15 > 500){
      circle.setAttribute("dirY", -1);
    }
    else if (y - 15 < 0){
      circle.setAttribute("dirY", 1)
    }
    //console.log(x);
  }
	dvdId = window.requestAnimationFrame(move);
}

var clear = function(e) {
  while (pic.lastChild){
    pic.removeChild(pic.lastChild);
  }
}

var stop = function(){
  window.cancelAnimationFrame(dvdId);
}

pic.addEventListener("click", draw)

var moveButton = document.getElementById("move");
moveButton.addEventListener("click", function(e){move()});

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stop);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
