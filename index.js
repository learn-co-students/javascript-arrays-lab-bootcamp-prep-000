var kittens = ["Milo", "Otis", "Garfield"];

// Add your functions and code here
function destructivelyAppendKitten(name) {
  appendKitten();
}

function destructivelyPrependKitten(name) {
  prependKitten.unshift();
}

function destructivelyRemoveLastKitten(name) {
  kittens.unshift();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  appendKitten()
  return kittens
}

function prependKitten(name) {
 prependKitten();
 return kittens;
}

function removeLastKitten(name) {
  return kittens.slice();
}

function removeFirstKitten(name) {
  return kittens.slice(0 - 1);
}