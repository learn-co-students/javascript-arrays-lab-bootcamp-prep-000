const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name){
  kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function(name){
  kittens.pop(name)
}

var destructivelyRemoveFirstKitten = function(name){
  kittens.shift(name)
}

var appendKitten = function(name){
  return [...kittens, name]
}

var prependKitten = function(name){
  return [name, ...kittens]
}

var removeLastKitten = function(name){
  return kittens.slice(0, kittens.length - 1)
}

var removeFirstKitten = function(name){
  return kittens.slice(1)
}
