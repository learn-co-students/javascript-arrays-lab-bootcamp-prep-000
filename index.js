const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(0)
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
