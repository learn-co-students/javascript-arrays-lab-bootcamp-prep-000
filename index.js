const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newkitten = kittens.concat(name);
  return newkitten;
}

function prependKitten(name) {
  var unkitten = [name,...kittens];
  return unkitten;
}

function removeLastKitten(name) {
  var remkitten = kittens.slice(0,kittens.length - 1);
  return remkitten;
}

function removeFirstKitten(name) {
  var firkitten = kittens.slice(1);
  return firkitten;
}