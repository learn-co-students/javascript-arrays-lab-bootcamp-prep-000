const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
function prependKitten(name) {
  var upKittens = [name, ...kittens];
  return upKittens;
}
function removeLastKitten (name) {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten (name) {
    return kittens.slice([1]);
}
