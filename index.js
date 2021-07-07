var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}

function appendKitten(name) {
  var newArray = [...kittens];
  newArray.push("Broom");
  return newArray
}

function prependKitten(name) {
  var newArray = [...kittens];
  newArray.unshift("Arnold");
  return newArray
}

function removeLastKitten() {
  var newArray = [...kittens];
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  var newArray = [...kittens];
  newArray.shift();
  return newArray
}