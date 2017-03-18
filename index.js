const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  return kittens.push(element);
}

function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}

function destructivelyRemoveLastKitten() {
  return kittens.splice(kittens.length - 1, 1)
}

function destructivelyRemoveFirstKitten() {
  return kittens.splice(0, 1)
}

function appendKitten(element) {
  var results = [...kittens, element]
  return results
}

function prependKitten(element) {
  var results = [element, ...kittens]
  return results
}

function removeLastKitten() {
  var results = kittens.slice(0, kittens.length - 1)
  return results
}

function removeFirstKitten() {
  var results = kittens.slice(1)
  return results
}
