const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var newKittens = ["Arnold", ...kittens];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1 )
  return newKittens
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
