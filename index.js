//const app = "I don't do much."
var name
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function appendKitten(name) {
    var kittens = ["Milo", "Otis", "Garfield"]
    var total = kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}
