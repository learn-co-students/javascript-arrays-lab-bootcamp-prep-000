const app = "I don't do much.";

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
};

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop();
};

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift();
};

var appendKitten = function(name) {
  var newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
};

var prependKitten = function(name) {
  var newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
};

var removeLastKitten = function() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
};

var removeFirstKitten = function() {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}