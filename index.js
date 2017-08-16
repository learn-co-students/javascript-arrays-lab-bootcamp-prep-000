const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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
  var newKitten = [...kittens, name];
  return newKitten;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  var prependNewKitten = [name, ...kittens];
  return prependNewKitten;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten() {
  var removeEndKitten = kittens.slice(0, kittens.length - 1);
  return removeEndKitten;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten() {
  var FirstKittenRemove = kittens.slice(1);
  return FirstKittenRemove;
}
