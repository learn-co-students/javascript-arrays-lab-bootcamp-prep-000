const app = "I don't do much."
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
  var kits = [...kittens, name];
  return kits;
}

function prependKitten(name) {
  var mits = [name, ...kittens];
  return mits;
}

function removeLastKitten(name) {
  var fluff = kittens.slice(0, kittens.length-1);
  return fluff;
}

function removeFirstKitten(name) {
  var puff = kittens.slice(1);
  return puff;
}
