const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = function (name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function () {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function(name) {
  var newArray = [...kittens, name];
  return newArray;
}

var prependKitten = function(name) {
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0,kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1,kittens.length);
  return newArray;
}
