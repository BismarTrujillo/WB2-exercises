// This script tests various numeric conversion techniques

var a = "   101.1   ";
var b = "55";
var c = "402 Stevens";
var d = " Number   5   ";


console.log(parseInt(a) , parseInt(b) , parseInt(c) , parseInt(d));
console.log(parseFloat(a) , parseFloat(b) , parseFloat(c) , parseFloat(d) );
console.log(Number(a) , Number(b) , Number(c) , Number(d) );
console.log(+a, +b, +c, +d);