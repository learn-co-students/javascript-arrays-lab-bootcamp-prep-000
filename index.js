var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var appendedKitten = [...kittens, name];
  return appendedKitten;
}

function prependKitten(name) {
  var prependedKitten = [name, ...kittens];
  return prependedKitten;
}

function removeLastKitten(name) {
  var lastKittenRemoved = kittens.slice(0, kittens.length-1);
  return lastKittenRemoved;
}

function removeFirstKitten(name) {
  var firstKittenRemoved = kittens.slice(1);
  return firstKittenRemoved;
}