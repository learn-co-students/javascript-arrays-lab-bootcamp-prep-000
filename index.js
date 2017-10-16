var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
};

function destructivelyRemoveLastKitten() {
kittens = kittens.slice(0, kittens.length - 1)
};

function destructivelyRemoveFirstKitten() {
  kittens.shift()
};

function appendKitten(name) {
  var kittensTwo = [...kittens, name]
  return kittensTwo
};

function prependKitten(name) {
  var kittensThree = [name, ...kittens]
  return kittensThree
};

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
};

function removeFirstKitten() {
  return kittens.slice(1)
};
