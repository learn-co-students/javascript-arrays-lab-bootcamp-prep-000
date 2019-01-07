var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten() {
  kittens.push('Ralph');
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop(1);
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
 var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}
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


