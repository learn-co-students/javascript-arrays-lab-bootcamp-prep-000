const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(-1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
  return kittens;
}

function appendKitten(name) {
  var fnArray = [...kittens, name];
  return fnArray;
}
function prependKitten(name) {
  var fnArray = [name, ...kittens];
  return fnArray;
}

function removeLastKitten() {
  var fnArray = kittens.slice(0, -1);
  return fnArray;
}

function removeFirstKitten() {
  var fnArray = kittens.slice(1);
  return fnArray;
}
