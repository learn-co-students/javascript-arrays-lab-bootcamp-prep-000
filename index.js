const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten (name) {
  //appends a kitten to the end of the kittens array.
  kittens.push(name);
}
function destructivelyPrependKitten (name) {
  //prepends a kittend to the beginning of the kittens array.
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten () {
  //removes the last kitten from the kittens array.
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  //removes the first kitten from the kittens array.
kittens.shift();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
