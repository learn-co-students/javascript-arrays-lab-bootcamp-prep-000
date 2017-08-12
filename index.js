const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
};

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
};

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
};

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens

};

function prependKitten(name) {
  var newKittens = [name,...kittens]
  return newKittens
};

function removeLastKitten() {
  var kitties = kittens.slice(0, kittens.length - 1)
  return kitties
};

function removeFirstKitten() {
  var kitties = kittens.slice(1)
  return kitties
};
