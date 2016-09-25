const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name) {
  return kittens.push(name);
}

var destructivelyPrependKitten = function(name) {
  return kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function(name) {
  return kittens.pop(name);
}

var destructivelyRemoveFirstKitten = function(name) {
  return kittens.shift(name);
}

var appendKitten = function(name) {
  return [...kittens, name];
}

var prependKitten = function(name) {
  return [name, ...kittens];
}

var removeLastKitten = function(name) {
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = function(name) {
  return kittens.slice(1);
}
