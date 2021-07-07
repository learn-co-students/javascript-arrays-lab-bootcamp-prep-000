var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = function(name) {
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name) {
  return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function() {
  return kittens.pop()
}

var destructivelyRemoveFirstKitten = function() {
  return kittens.shift()
}

var appendKitten = function(name) {
  return [...kittens, name]
}

var prependKitten = function(name) {
  return [name, ...kittens]
}

var removeLastKitten = function() {
  return kittens.slice(0, kittens.length - 1)
}

var removeFirstKitten = function() {
  return kittens.slice(1)
}

