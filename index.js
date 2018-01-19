const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens[3] = name;
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let a2 = [...kittens, name];
  return a2;
}

function prependKitten(name) {
  let a2 = [name, ...kittens];
  return a2;
}

function removeLastKitten() {
  let a3 = kittens.slice(0, kittens.length - 1);
  return a3;
}

function removeFirstKitten() {
  let a4 = kittens.slice(1);
  return a4;
}
