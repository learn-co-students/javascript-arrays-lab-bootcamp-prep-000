const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

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
  var newKittens1 = [...kittens, name];
  return newKittens1;
}

function prependKitten(name) {
  var newKittens2 = [name, ...kittens];
  return newKittens2;
}

function removeLastKitten() {
  var newKittens3 = kittens.slice(0, kittens.length-1);
  return newKittens3;
}

function removeFirstKitten() {
  var newKittens4 = kittens.slice(1);
  return newKittens4;
}
