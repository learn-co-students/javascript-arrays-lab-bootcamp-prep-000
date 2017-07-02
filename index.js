const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var appendedKittens = [...kittens, name];
  return appendedKittens;
}

function prependKitten(name) {
  var prependedKittens = [name, ...kittens];
  return prependedKittens;
}

function removeLastKitten() {
  var lastKittenRemoved = kittens.slice(0, kittens.length - 1);
  return lastKittenRemoved;
}

function removeFirstKitten() {
  var firstKittenRemoved = kittens.slice(1);
  return firstKittenRemoved;
}
