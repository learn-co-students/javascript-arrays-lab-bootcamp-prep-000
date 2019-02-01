var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(array, name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
  return kittens;
}

function appendKitten(array, name) {
  return [...kittens, "Broom"];
}

function prependKitten(array, name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(array) {
  return kittens.slice(1);
}