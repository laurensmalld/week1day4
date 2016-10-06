map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

function map (arr, callback) {
  var mapArray = [];
  for(var i = 0; i < arr.length; i++)
    length = arr[i].length;
    mapArray.push(length);
  } console.log(mapArray);
}
