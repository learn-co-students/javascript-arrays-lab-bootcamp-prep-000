const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens]
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, (kittens.length - 1))
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1)
  return kittens;
}

function appendKitten(name) {
  var kitten = [...kittens, name]
  return kitten;
}

function prependKitten(name) {
  var kitten = [name, ...kittens]
  return kitten;
}

function removeLastKitten() {
  var kitten = kittens.slice(0, (kittens.length - 1))
  return kitten;
}

function removeFirstKitten() {
  var kitten = kittens.slice(1)
  return kitten;
}
