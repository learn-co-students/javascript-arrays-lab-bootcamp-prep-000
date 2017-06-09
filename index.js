const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newKittens = kittens.slice();
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice();
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens.slice();
  newKittens.pop(name);
  return newKittens;
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice();
  newKittens.shift(name);
  return newKittens;
}
