const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
  var kittens2 = [...kittens, name];
  return kittens2;
}
function prependKitten(name) {
  var kittens2 = [name, ...kittens];
  return kittens2;
}
function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length -1);
  return kittens2;
}
function removeFirstKitten() {
  var kittens2 = kittens.slice(1);
  return kittens2;
}
