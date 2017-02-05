const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
}

var appendKitten = name => {
  return [...kittens, name];
}

var prependKitten = name => {
  return [name, ...kittens];
}

var removeLastKitten = function() {
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = function() {
  return kittens.slice(1);
}
