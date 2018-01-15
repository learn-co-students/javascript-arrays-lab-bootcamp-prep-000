const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push(name);
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newName = kittens.slice();
  newName.push(name);
  return newName;
}

function prependKitten(name) {
  var newName = kittens.slice();
  newName.unshift(name);
  return newName;
}

function removeLastKitten() {
  var newName = kittens.slice();
  newName.pop();
  return newName;
}

function removeFirstKitten() {
  var newKitten = kittens.slice();
  newKitten.shift();
  return newKitten;
}