const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittens = kittens
  return [...newKittens, name]
}

function prependKitten(name) {
  var newKittens = kittens
  return [name, ...newKittens]
}

function removeLastKitten() {
  var newKittens = kittens
  newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens
  newKittens.shift()
  return newKittens
}
