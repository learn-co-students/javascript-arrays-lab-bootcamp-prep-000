const app = "I don't do much."
var kittens;

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
