const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, 2);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(-2);
  return newArray;
}
