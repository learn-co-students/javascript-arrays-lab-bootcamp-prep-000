
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kittens = [name...kittens]
  return kittens
}
