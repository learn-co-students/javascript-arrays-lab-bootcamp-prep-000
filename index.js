const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newKittens = kittens.slice()
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = kittens.slice()
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = kittens.slice()
  newKittens.pop(name)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice()
  newKittens.shift(name)
  return newKittens
}
