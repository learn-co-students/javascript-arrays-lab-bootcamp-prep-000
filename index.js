const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

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
  var newKits = kittens.push(name);
  return newKits;
}

function prependKitten(name) {
  var preKits = kittens.unshift(name);
  return preKits;
}

function removeLastKitten(name) {
  var removeKit = kitten.slice(0, kittens.length - 1);
  return removeKit;
}

function removeFirstKitten(name) {
  var removeFirstKit = kittens.shift(name);
  return removeFirstKit;
}