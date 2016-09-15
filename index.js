const app = "I don't do much."

var kittens = [];

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
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens;
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}

function removeLastKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop(name);
  return kittens;
}

function removeFirstKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift(name);
  return kittens;
}
