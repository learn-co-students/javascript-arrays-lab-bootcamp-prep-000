const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var kittens2 = [...kittens, name];
  return kittens2;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  var kittens2 = [name, ...kittens];
  return kittens2;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten() {
  var kittens2 = kittens.slice(1);
  return kittens2;
}
