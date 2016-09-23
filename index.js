const app = "I don't do much."

var kittens = [];

function destructivelyAppendKitten(name) {
  kittens.push(name)
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
  var akittens = [...kittens, name]
  return akittens
}

function prependKitten(name) {
  var pkittens = [name, ...kittens]
  return pkittens
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, 2)
  return lastKitten
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1)
  return firstKitten
}
