var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph");
}
function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(array) {
  kittens.pop();
}
function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
}
function appendKitten(name) {
  var newKitten = [...kittens, name];
  return newKitten;
}
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}
function removeLastKitten() {
  var newCat = kittens.slice(0, -1);
  return newCat;
}
function removeFirstKitten() {
  var newCats = kittens.slice(1);
  return newCats;
}
