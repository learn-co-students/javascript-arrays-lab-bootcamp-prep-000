const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
var destructivelyAppendKitten = function(name) {
  kittens.push(name)
}
var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
}
var destructivelyRemoveLastKitten = function() {
  kittens.pop()
}
var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
}
var appendKitten = function(name) {
  return [...kittens, name]
}
var prependKitten = function(name) {
  return [name, ...kittens]
}
var removeFirstKitten = function() {
  return kittens.slice(1)
}
var removeLastKitten = function() {
  return kittens.slice(0, kittens.length - 1)
}
