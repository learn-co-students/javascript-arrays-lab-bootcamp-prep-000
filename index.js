const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (item) {
  kittens.push(item);
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten (item) {
  kittens.unshift(item);
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten (item) {
  var kittens2 = [...kittens,item]
  return kittens2
}
var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten (item) {
  var kittens2 = [item,...kittens]
  return kittens2
}
var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten () {
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}
var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten () {
  var kittens2 = kittens.slice(1)
  return kittens2
}