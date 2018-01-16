const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var lastKitten = [...kittens, name];
  return lastKitten;
}

function prependKitten(name) {
  var firstKitten = [name, ...kittens];
  return firstKitten;
}

function removeLastKitten() {
  var removeLastKitty = kittens.slice(0, kittens.length - 1);
  return removeLastKitty;
}

function removeFirstKitten() {
  var removeFirstKitty = kittens.slice(1);
  return removeFirstKitty;
}
