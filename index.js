var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kittens) {
  return Ralph;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
 kittens.shift(name);
}

function appendKitten(name) {
  return[...kittens, name]
}

function prependKitten(name) {
  return[name, ...kittens]
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}