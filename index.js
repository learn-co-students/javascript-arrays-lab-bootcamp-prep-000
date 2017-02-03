const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var appendedkittens = [...kittens, name];
  return appendedkittens;
}

function prependKitten(name) {
  var prependedkittens = [name, ...kittens];
  return prependedkittens;
}

function removeLastKitten() {
  var removeKitten = kittens.slice(0, kittens.length - 1);
  return removeKitten;
}

function removeFirstKitten() {
  var removeOtherKitten = kittens.slice(1, kittens.length);
  return removeOtherKitten;
}
