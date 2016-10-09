var input = [
{ x: 3, y: 4 },
{ x: 12, y: 5 },
{ x: 8, y: 15 }
];

var result = input.map(function pyth(numbers) {

  var xVal = numbers.x;
  var yVal = numbers.y;

  var xPow = Math.pow(xVal, 2);
  var yPow = Math.pow(yVal, 2);

  var xPowArray = [];
  xPowArray.push(xPow)
  var yPowArray = [];
  yPowArray.push(yPow)

  var sum = [];
  sum.push(Math.sqrt(xPowArray[0] + yPowArray[0]))
});



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

