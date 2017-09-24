const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten (append) {
  kittens.push(append)
  return kittens
}

function destructivelyPrependKitten (append) {
  kittens.unshift(append)
  return kittens
}

function destructivelyRemoveLastKitten (remove) {
  kittens.pop(remove)
  return kittens
}

function destructivelyRemoveFirstKitten (remove) {
  kittens.shift(remove)
  return kittens
}

function appendKitten (append) {
  var kittens2 = [...kittens, append]
  return kittens2
}

function prependKitten(prepend) {
  var kittens2 = [prepend,...kittens]
  return kittens2
}

function removeLastKitten (remove) {
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}

function removeFirstKitten (remove) {
  var kittens2 = kittens.slice(1, kittens.length)
  return kittens2
}
