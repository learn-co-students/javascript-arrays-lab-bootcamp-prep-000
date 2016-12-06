const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
};

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
};

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
};

function appendKitten(name) {
  var appendKitten = [...kittens, name]
  return appendKitten
};

function prependKitten(name) {
  var prependKitten = [name, ...kittens]
  return prependKitten
};

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0,2)
  return removeLastKitten
};

function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1,3)
  return removeFirstKitten
};
