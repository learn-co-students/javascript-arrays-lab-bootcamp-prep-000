// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  return kittens.push(element)
}

function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}

function destructivelyRemoveLastKitten(element) {
  return kittens.pop(element)
}

function destructivelyRemoveFirstKitten(element) {
  return kittens.shift(element)
}

function appendKitten(element) {
  return kittens.concat(element)
}

function prependKitten(element) {
  return Array(element).concat(kittens)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
