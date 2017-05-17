const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name) {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
  kittens = kittens.slice(1)
  return kittens
}

var appendKitten = function(name) {
  return [...kittens, name]
}

var prependKitten = function(name) {
  return [name, ...kittens]
}

var removeLastKitten = function() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

var removeFirstKitten = function() {
  var newArray = kittens.slice(1)
  return newArray
}
