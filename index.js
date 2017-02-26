const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  var array = kittens;
  return array;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  var array = kittens;
  return array;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  var array = kittens;
  return array;
}

function destructivelyRemoveFirstKitten () {
  kittens.unshift();
  var array = kittens;
  return array;
}

function appendKitten (name) {
  return [...kittens, name];
}

function prependKitten (name) {
  return [name, ...kittens];
}

function removeLastKitten () {
  return kittens.pop();
}

function removeFirstKitten () {
  return kittens.slice(1);
}
