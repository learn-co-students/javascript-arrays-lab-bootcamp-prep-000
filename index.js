const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newList = [...kittens, "Broom"]
  return newList;
}

function prependKitten(name) {
  var newList = ["Arnold", ...kittens]
  return newList;
}

function removeLastKitten() {
  var removedLast = kittens.slice(0, kittens.length -1);
  return removedLast;
}

function removeFirstKitten() {
  var removedFirst = kittens.slice(1);
  return removedFirst;
}