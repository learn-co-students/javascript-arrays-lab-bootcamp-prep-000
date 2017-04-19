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
  var brandNewKittens = [...kittens];
  brandNewKittens.push(name);
  return brandNewKittens;
}

function prependKitten(name) {
  var brandNewKittens = [...kittens];
  brandNewKittens.unshift(name);
  return brandNewKittens;
}

function removeLastKitten(name) {
  var brandNewKittens = [...kittens];
  brandNewKittens.pop(name);
  return brandNewKittens;
}

function removeFirstKitten(name) {
  var brandNewKittens = [...kittens];
  brandNewKittens.shift(name);
  return brandNewKittens;
}
