const app = "I don't do much.";

var kittens = ["milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n) {
  kittens.push(n);
  return kittens;
}

function destructivelyPrependKitten(n) {
  kittens.unshift(n);
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

function appendKitten(n) {
  return [...kittens, n];
}

function prependKitten(n) {
  return [n, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}