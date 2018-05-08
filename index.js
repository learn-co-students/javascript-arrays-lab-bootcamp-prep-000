const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

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
  var newkittens = [...kittens]
  newkittens.push(name)
  return newkittens
}

function prependKitten(name) {
  var newkittens = [...kittens]
  newkittens.unshift(name)
  return newkittens
}

function removeLastKitten(name) {
  var newkittens = [...kittens]
  newkittens.pop(name)
  return newkittens
  
}

function removeFirstKitten(name) {
  var newkittens = [...kittens]
  newkittens.shift(name)
  return newkittens
}