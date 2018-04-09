const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function accessElementInArray(kittens, index) {
  return kittens[index];
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift([0]);
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}






