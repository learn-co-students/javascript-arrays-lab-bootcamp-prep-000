// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.pop(name)
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]