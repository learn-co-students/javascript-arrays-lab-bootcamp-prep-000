const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(object) {
  return kittens.push(object)
}

function destructivelyPrependKitten(object) {
  return kittens.unshift(object)
}

function destructivelyRemoveLastKitten(object) {
  return kittens.pop(object)
}

function destructivelyRemoveFirstKitten(object) {
  return kittens.shift(object)
}

function appendKitten(object){
  var newArray = kittens.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(object)
  return newArray
}

function prependKitten(object) {
  var newArray = kittens.slice();
  newArray.unshift(object)
  return newArray
}

function removeLastKitten(object) {
  var newArray = kittens.slice();
  newArray.pop(object)
  return newArray
}

function removeFirstKitten(object) {
  var newArray = kittens.slice();
  newArray.shift(object)
  return newArray
}
