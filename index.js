const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var tempKittens;

function kittens() {
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  tempKittens = [...kittens, name];
  return tempKittens;
}

function prependKitten(name) {
  tempKittens = [name, ...kittens];
  return tempKittens;
}

function removeLastKitten() {
  tempKittens = kittens.slice(0, kittens.length - 1);
  return tempKittens;
}

function removeFirstKitten() {
  tempKittens = kittens.slice(1);
  return tempKittens;
}
