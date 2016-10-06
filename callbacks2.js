function findWaldo(arr, found) {
  arr.forEach(isWaldo)
  function isWaldo(element, index, arr) {
  if ( element == "Waldo") {
      found(index);   // execute callback
    }
  }
}


function actionWhenFound(counter) {
  console.log("Found him at index " + counter + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);