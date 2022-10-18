//distance formula

var x1 = 1;
var y1 = 2;
var x2 = 3;
var y2 = 4;

var distance = Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));

console.log("Given the points " + x1 + " "+ y1 + " "+ x2 + " "+ y2 + " the distance is " + distance.toFixed(2))