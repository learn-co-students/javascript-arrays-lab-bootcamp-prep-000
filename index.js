const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(x) {
  kittens.push(x);
  return kittens;
}

var destructivelyPrependKitten = function(x) {
  kittens.unshift(x);
  return kittens;
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function(x) {
  var newKittens = [...kittens, x];
  return newKittens;
}

var prependKitten = function(x) {
  var newKittens = [x, ...kittens];
  return newKittens;
}

var removeLastKitten = function() {
  var newKittens = kittens.slice(0,kittens.length-1);
  return newKittens;
}

var removeFirstKitten = function() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
