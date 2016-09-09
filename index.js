const app = "I don't do much."

function kittens () {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
  function destructivelyAppendKitten(element) {
  kittens.push(element)
return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
