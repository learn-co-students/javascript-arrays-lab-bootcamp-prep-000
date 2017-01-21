const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(1)
}

function appendKitten(name) {
  var appendKittenNew = [...kittens, name];
  return appendKittenNew;
}

function prependKitten(name) {
  var prependKittenNew = [name, ...kittens];
  return prependKittenNew;
}

function removeLastKitten(name) {
  var removeLastKittenNew = kittens.slice(0, kittens.length - 1);
  return removeLastKittenNew;
}

function removeFirstKitten(name) {
  var removeFirstKittenNew = kittens.slice(1);
  return removeFirstKittenNew;
}
