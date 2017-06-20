const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
var name = "Grommit"

function destructivelyAppendKitten (name) {
   return kittens.push (name)
}

function destructivelyPrependKitten (name) {
  return kittens.unshift (name)
}

function destructivelyRemoveLastKitten () {
   return kittens.pop ()
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift ()
}

function appendKitten (name) {
  var kitten2 = [...kittens, name]
  return kitten2
}

function prependKitten (name) {
  var kitten2 = [name,...kittens]
  return kitten2
}

function removeLastKitten () {
  return kittens.slice (0,kittens.length -1)
}

function removeFirstKitten () {
  return kittens.slice (1)
}
