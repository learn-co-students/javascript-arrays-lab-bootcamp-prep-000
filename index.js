const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push (name)
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift (name)
  return kittens
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop (name)
  return kittens
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift (name)
  return kittens
}

function appendKitten (name) {
  var theKittens = [...kittens]
  theKittens.push (name)
  return theKittens
}

function prependKitten (name) {
  var theKittens = [...kittens]
  theKittens.unshift (name)
  return theKittens
}

function removeLastKitten (name) {
  var theKittens = [...kittens]
  theKittens.pop (name)
  return theKittens
}

function removeFirstKitten (name) {
  var theKittens = [...kittens]
  theKittens.shift (name)
  return theKittens
}
