var pic = document.getElementById("vimage");

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


var clear = function(e) {
  while (pic.lastChild){
    pic.removeChild(pic.lastChild);
  }
}

pic.addEventListener("click", draw)


var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
