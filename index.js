const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

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
  kittens.shift()
  return kittens
}

var appendKitten = function(name) {
    var newKittens1 = [...kittens, name]
    return newKittens1
}

var prependKitten = function(name) {
  var newKittens2 = [name, ...kittens]
  return newKittens2
}

var removeLastKitten = function() {
  var takeKittens1 = kittens.slice(0, kittens.length - 1)
  return takeKittens1
}

var removeFirstKitten = function() {
  var takeKittens2 = kittens.slice(1)
  return takeKittens2
}
