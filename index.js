var kittens = [] //define your array here

// Add your functions and code here
var kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
function appendKitten(name) {
  var new_Kittens = [...kittens]
  new_Kittens.push(name)
  return new_Kittens
}
function prependKitten(name) {
  var new_Kittens = [...kittens]
  new_Kittens.unshift(name)
  return new_Kittens
}
function removeLastKitten(name) {
  var new_Kittens = [...kittens]
  new_Kittens.pop(name)
  return new_Kittens
}
function removeFirstKitten(name) {
  var new_Kittens = [...kittens]
  new_Kittens.shift(name)
  return new_Kittens
}

