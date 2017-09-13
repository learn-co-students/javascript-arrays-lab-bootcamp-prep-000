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
  var newKitten = [...kittens];
  newKitten.push(name);
  return newKitten;
}

function prependKitten(name) {
  var newKitten = [...kittens];
  newKitten.unshift(name);
  return newKitten;
}

function removeLastKitten() {
  var newKitten = [...kittens];
  newKitten.pop();
  return newKitten;
}

function removeFirstKitten() {
  var newKitten = [...kittens];
  newKitten.shift();
  return newKitten;
}
