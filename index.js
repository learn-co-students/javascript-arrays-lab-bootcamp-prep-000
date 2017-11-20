const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
  var appendedKittens = [...kittens];
  appendedKittens.push(name);
  return appendedKittens;
}

function prependKitten(name) {
  var prependedKittens = [...kittens];
  prependedKittens.unshift(name);
  return prependedKittens;
}

function removeLastKitten() {
  var poppedKittens = [...kittens];
  poppedKittens.pop();
  return poppedKittens;
}

function removeFirstKitten() {
  var shiftedKittens = [...kittens];
  shiftedKittens.shift();
  return shiftedKittens;
}
