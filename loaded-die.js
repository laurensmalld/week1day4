var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
   var roll = list[0];
   for (var i = 0; i < list.length; i++) {
    return roll[i]++;
  }
});


console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6


//list.forEach(function(current) {
   // return current++;
//for (var i = 0; i < list.length; i++) {
  //  return list[i++];

//list.forEach(function (elem) {
   // return elem++;

