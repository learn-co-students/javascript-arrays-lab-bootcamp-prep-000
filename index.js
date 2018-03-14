const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  //appends kitten to end of array
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  //prepends a kitten to beginning of array
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  //removes last kitten from array
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  //removes first kitten from array
}

function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
  //appends a kitten to end of array and returns a new array and preserves the original

}

function prependKitten(name) {
  var newArray = [name,...kittens]
  return newArray
  //prepends a kitten to array and returns a new array while preserving the original
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
  //remove last kitten from array and return a new array while preserving the original
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray
  //remove first kitten from array and return a new array while preserving the original 
}
