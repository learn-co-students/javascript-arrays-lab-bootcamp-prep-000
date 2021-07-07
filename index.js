var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens
}

function appendKitten(name) {
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}

function removeLastKitten(name) {
return kittens.slice(0, kittens.length - 1);
}