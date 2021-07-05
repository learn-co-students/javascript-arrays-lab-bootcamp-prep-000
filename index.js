var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyPrependKitten = function(){
  kittens.unshift("Bob")
  return kittens
}
var destructivelyAppendKitten = function(){
  kittens.push("Ralph")
  return kittens
}
var destructivelyRemoveLastKitten = function(){
  kittens.pop()
  return kittens
}
var destructivelyRemoveFirstKitten = function(){
  kittens.shift()
  return kittens
}
var appendKitten = function(){
  return [...kittens, "Broom"]
  return kittens
}
var prependKitten = function(){
  return ["Arnold", ...kittens]
  return kittens
}
var removeLastKitten = function(){
  return kittens.slice(0, kittens.length - 1)
}
var removeFirstKitten = function(){
  return kittens.slice(1)
}
