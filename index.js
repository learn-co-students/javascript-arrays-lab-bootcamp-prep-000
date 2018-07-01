const app = "I don't do much.";

var   kittens;

function kittens() {
  kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens();
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens();
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens();
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens();
  kittens.shift();
}

  function appendKitten(name) {
    kittens();
    return [...kittens, name];
}

  function prependKitten(name) {
    kittens();
    return [name, ...kittens];
}

  function removeLastKitten() {
    kittens();
    return kittens.slice(0, kittens.length - 1);
}

  function removeFirstKitten() {
    kittens();
    return kittens.slice(1, kittens.length);
}
