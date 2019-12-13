/*
Team postfix --  Brandon Chen, Kenneth Chin
SoftDev1 pd9
K29 -- Sequential Progression III: Season of the Witch
2019-12-12
*/


var changeHeading = function(e) {
  var h = document.getElementById("h");
  h.innerHTML = e;
};
var removeItem = function(e){
  e.remove();
};

var lis = document.getElementsByTagName("li");

for (var i=0; i<lis.length; i++){
  lis[i].addEventListener( 'mouseover', function(e) {changeHeading(e['target'].innerHTML);});
  lis[i].addEventListener( 'mouseout', function(e) { changeHeading("Hello World!");} );
  lis[i].addEventListener( 'click', function(e) { removeItem(e.target); } );
}

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "item " + lis.length;
  item.addEventListener( 'mouseover', function(e) {changeHeading(e['target'].innerHTML);});
  item.addEventListener( 'mouseout', function(e) { changeHeading("Hello World!");} );
  item.addEventListener( 'click', function(e) { removeItem(e.target); } );
  list.appendChild(item);
};

var button = document.getElementById("b");
button.addEventListener( 'click', addItem);

var num = 0; //counter for fib
var ftnum = 1; //counter for fact
var flist = [0,1]; //list for fib
var ftlist = [1,1]; //list for fact

var fib = function(n) {
  if ( n < 2 ) {
    return 1;
  }
  else {
    return fib(n-1) + fib(n-2);
  }
};

var addFib = function(e){
  console.log(e);
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  item.innerHTML = fib(num++);
  list.appendChild(item);
};

var addFib2 = function(e) { //adds fib using list
  console.log(e);
  //console.log(e);
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  var sum;
  if (num == 0) {
    sum = 1;
    num++;}
  else {
    sum = flist[num] + flist[num - 1];
    num++;
    flist.push(sum);
  }
  item.innerHTML = sum;
  list.appendChild(item);
};

var addFact = function(e) { //adds fact using list
  console.log(e);
  //console.log(e);
  var list = document.getElementById("factlist");
  var item = document.createElement("li");
  var sum;
  if (ftnum == 1) {
    sum = 1;
    ftnum++;}
  else {
    sum = ftnum * ftlist[ftnum - 1];
    ftnum++;
    ftlist.push(sum);
  }
  item.innerHTML = sum;
  list.appendChild(item);
};

var fb = document.getElementById("fb");
fb.addEventListener( "click", addFib2 );

var fb = document.getElementById("ft");
fb.addEventListener( "click", addFact );
