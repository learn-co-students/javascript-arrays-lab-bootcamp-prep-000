const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = [...kittens]
  newKittens.pop(name)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = [...kittens]
  newKittens.shift(name)
  return newKittens
}