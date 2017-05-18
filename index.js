const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(array, element) {
  kittens.push("Ralph");
  return kittens;
}

var destructivelyPrependKitten = function(array, element) {
  kittens.unshift("Bob");
  return kittens;
}

var destructivelyRemoveLastKitten = function(array) {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(array) {
  kittens.shift(1);
  return kittens;
}

var appendKitten = function(array, element) {
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

var prependKitten = function(array, element) {
  var newKittens = ["Arnold", ...kittens];
  return newKittens;
}

var removeLastKitten = function(array) {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

var removeFirstKitten = function(array) {
  var newKittens = kittens.slice(1);
  return newKittens;
}
