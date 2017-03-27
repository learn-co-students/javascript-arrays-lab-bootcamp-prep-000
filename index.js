const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name) {
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = function(name) {
  return kittens.pop()
}

var destructivelyRemoveFirstKitten = function(name) {
  return kittens.shift()
}

var appendKitten = function(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

var prependKitten = function(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

var removeLastKitten = function(name) {
  var newKittens = kittens.slice(0,length-1)
  return newKittens
}

var removeFirstKitten = function(name) {
  var newKittens = kittens.slice(1)
  return newKittens
}
