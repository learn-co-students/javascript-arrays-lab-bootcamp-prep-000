const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
}

function appendKitten(name) {
  var kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name) {
  var kittens3 = [name, ...kittens]
  return kittens3
}

function removeLastKitten(array) {
  var kittens4 = kittens.slice(0,2)
  return kittens4
}

function removeFirstKitten(array) {
  var kittens5 = kittens.slice(1)
  return kittens5
}