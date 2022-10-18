//rentals

var people = 50;
var numOfVans = Math.ceil(people / 15);
var totalCost = numOfVans * 250;
var costPerPerson = (totalCost / people).toFixed(2);

console.log( totalCost + " is the cost of the vans and " + costPerPerson + " is the cost per person")
