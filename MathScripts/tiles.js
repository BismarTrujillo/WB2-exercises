//tiles

var lenghtRoom = 10;
var widthRoom = 30;
var areaRoom = lenghtRoom * widthRoom;
var minTiles = areaRoom / 12;
var totalTiles = minTiles * 1.1;
var numOfBoxes = Math.ceil(totalTiles / 12);

console.log("For a room with " + areaRoom + " sqft, there should be " + numOfBoxes + " boxes of tiles purchased");

