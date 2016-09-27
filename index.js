const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(array) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(array) {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(array) {
  return kittens.slice(1);
}
