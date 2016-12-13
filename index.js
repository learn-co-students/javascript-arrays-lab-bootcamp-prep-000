const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens;
};

var destructivelyRemoveLastKitten = name => {
  kittens.pop(name);
  return kittens;
};

var destructivelyRemoveFirstKitten = name => {
  kittens.shift(name);
  return kittens;
};

function appendKitten(name) {
  var newArr = [...kittens, name];
  return newArr;
};

function prependKitten(name) {
  var newArr = [name, ...kittens];
  return newArr;
};

function removeLastKitten(name) {
  var newArr = kittens.slice(0, kittens.length - 1);
  return newArr;
};

function removeFirstKitten(name) {
  var newArr = kittens.slice(1);
  return newArr;
};