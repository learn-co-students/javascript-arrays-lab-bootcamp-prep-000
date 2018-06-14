const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var kittensappended = [...kittens,name]
  return kittensappended
}

function prependKitten(name) {
  var kittensprepended = [name, ...kittens]
  return kittensprepended
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, kittens.length - 1);
  return lastKitten
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1);
  return firstKitten
}
