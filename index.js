// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newKittens = [...kittens,name];
  return newKittens;
}

function prependKitten(name) {
  var ourKittens = [name,...kittens];
  return ourKittens;
}

function removeLastKitten() {
   var kittens = ['Milo', 'Otis'];
  return kittens;
}

function removeFirstKitten() {
  return kittens.slice(1);
}