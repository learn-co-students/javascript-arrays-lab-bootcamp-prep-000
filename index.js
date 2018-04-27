const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
};

function appendKitten(name) {
  var appendKitten = [...kittens, name];
  return appendKitten;
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
};

function prependKitten(name) {
  var prependKitten = [name, ...kittens];
  return prependKitten;
};

function removeLastKitten() {
  removeLastKitten = kittens.slice(0, kittens.length - 1);
  return removeLastKitten;
};

function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
};
