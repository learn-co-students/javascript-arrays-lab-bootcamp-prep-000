const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

destructivelyAppendKitten('Ralph');

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

destructivelyPrependKitten('Bob');

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}

appendKitten('Broom');

kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  var newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
}

prependKitten('Arnold');

kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten() {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}