var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
  return kittens
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element);
  return kittens
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element);
  return kittens
}

function appendKitten(element) {
var newKitten = kittens.concat(element);
  return newKitten
}

function prependKitten(element) {
  var newKitten = [(element), ...kittens];
  return newKitten
}

function removeLastKitten(array) {
var newArray =  kittens.slice(0, kittens.length - 1);
  return newArray
}

function removeFirstKitten(array) {
  var newArray = kittens.slice(1);
  return newArray
}
