//const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield']

var destructivelyAppendKitten = function(name) {
  kittens.push(name)
  return kittens
}
var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
  return kittens
}
var destructivelyRemoveLastKitten = function(name) {
   kittens.pop(name)
   return kittens
}
var destructivelyRemoveFirstKitten = function() {
  kittens.shift(name)
  return kittens
}
var appendKitten = function(name) {
  return [...kittens, name]
}
var prependKitten = function(name) {
  return [name, ...kittens]
}
var removeFirstKitten = function() {
  var element = kittens.slice(1)
  return element
}
var removeLastKitten = function() {
  var element = kittens.slice(0,length-1)
  return element
}
