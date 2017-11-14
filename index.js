const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}
function appendKitten(name) {
  var freshkit = [...kittens, name]
  return freshkit;
}
function prependKitten(name) {
  var freshkit = [name, ...kittens]
  return freshkit;
}
function removeLastKitten() {
 var freshkit = kittens.slice(0, kittens.length-1) 
 return freshkit
}
function removeFirstKitten() {
  var freshkit = kittens.slice(1)
  return freshkit
}