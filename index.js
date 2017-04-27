const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens () {
  kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  var name = "Ralph"
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  var name = "Bob"
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var name = "Broom"
  return [...kittens, name];
}

function prependKitten(name) {
  var name = "Arnold"
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
