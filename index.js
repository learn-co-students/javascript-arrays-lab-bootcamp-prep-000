const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var result = kittens.push(name);
  return result;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var result = kittens.pop();
  return result;
}

function destructivelyRemoveFirstKitten() {
  var result = kittens.shift();
  return result;
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

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}
