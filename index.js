const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  var newKittens
  newKittens = [...kittens,name]
  return newKittens;
}

function prependKitten(name) {
  var newKittens
  newKittens = [name, ...kittens]
  return newKittens;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(array) {
  return kittens.slice(1)
}
