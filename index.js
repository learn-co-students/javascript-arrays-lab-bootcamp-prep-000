var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  kittens.push(element)
  return kittens
}
destructivelyAppendKitten('Ralph')


function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}


function destructivelyRemoveLastKitten(element) {
  kittens.pop(element)
  return kittens
}


function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element)
  return kittens
}


function appendKitten(name) {
var kittens2 = [...kittens, name]
  return kittens2
}
appendKitten('Broom')


function prependKitten(name) {
var kittens2 = [name, ...kittens]
  return kittens2
}
appendKitten('Broom')


function removeLastKitten(name) {
  var kittens2 = kittens.slice(0, 2)
  return kittens2
}

function removeFirstKitten(name) {
  var kittens2 = kittens.slice(1, 3)
  return kittens2
}