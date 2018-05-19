const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens;
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.unshift(name);
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens.pop();
  return newKittens;
}

function removeFirstKitten(name) {
  var newKittens = kittens.shift();
  return newKittens;
}
