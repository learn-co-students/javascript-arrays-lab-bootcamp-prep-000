const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var array = kittens.slice();
  array.push(name);
  return array;
}

function prependKitten(name) {
  var array = kittens.slice();
  array.unshift(name);
  return array;
}

function removeLastKitten() {
  var array = kittens.slice();
  array.pop();
  return array;
}

function removeFirstKitten() {
  var array = kittens.slice();
  array.shift();
  return array
}
