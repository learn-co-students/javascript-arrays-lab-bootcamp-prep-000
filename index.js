const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function appendKitten(name) {
  var kittens2 = [...kittens]
  kittens2.push(name);
  return kittens2
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function prependKitten(name) {
  var kittens3 = [...kittens]
  kittens3.unshift(name);
  return kittens3
}

function removeLastKitten() {
  var kittens4 = [...kittens]
  kittens4.pop()
  return kittens4
}

function removeFirstKitten() {
  var kittens5 = [...kittens]
  kittens5.shift()
  return kittens5
}