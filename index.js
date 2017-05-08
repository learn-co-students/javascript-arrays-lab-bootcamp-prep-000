const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (element) {
  return kittens.push(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten (element) {
  return kittens.unshift(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten (element) {
  return kittens.pop(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten (element) {
  return kittens.shift(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten (element) {
  return [...kittens, element]
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten (element) {
  return [element, ...kittens]
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten (element) {
  return kittens.slice(0, kittens.length - 1)
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten (element) {
  return kittens.slice(1)
}
