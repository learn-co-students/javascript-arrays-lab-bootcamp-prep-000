// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten (name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten (name) {
  return kittens.shift(name);
}

function appendKitten (name) {
  return kittens.concat(name);
}

function prependKitten (name) {
  return [name, ...kittens];
}

function removeLastKitten () {
  return kittens.slice(0,2);
}

function removeFirstKitten () {
  return kittens.slice(1,3)
}