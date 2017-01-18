const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  //pushes kitten to the end of array
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  //adds kitten at the beginning of the array
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  //eliminates kitten from the end of the array
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  //removes kitten from the beginning of the array
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
  //added new kitten to the end of new kittens array without altering original array
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
  //added new kitten to the front of the array without altering original array
}

function removeLastKitten(array) {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens.slice(0, kittens.length -1);
  return newKittens
  //minus one will remove the last element or kitten in the array
  //the original array will remain unchanged when using slice
  //kittens.length refers to the whole array minus one element from the end
}

function removeFirstKitten(array) {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens.slice(1);
  return newKittens
  //this problem requires for the original kittens array to list its elements
  //slice one removes the first element in the array
  //if no second argument, slice goes from the first argument to the end of the array
}
