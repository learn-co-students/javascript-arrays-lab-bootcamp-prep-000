const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name) {
  var sameArray = kittens.push("Ralph")
  return sameArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name) {
  var sameArray = kittens.unshift("Bob")
  return sameArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten() {
  var sameArray = kittens.pop()
  return sameArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten() {
  var sameArray = kittens.shift()
  return sameArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name) {
  var newArray = [name ,...kittens]
  return newArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten() {
  var newArray = kittens.slice(0,kittens.length - 1)
  return newArray
}
var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}
