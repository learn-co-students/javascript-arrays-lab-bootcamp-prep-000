const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens = [name, ...kittens];
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens = kittens.slice(0,2);
}

function destructivelyRemoveFirstKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens = kittens.slice(1,3);
}
function appendKitten(name) {
  var arr1 = [...kittens, name];
  return arr1;
}

function prependKitten(name) {
  var arr2 = [name, ...kittens];
  return arr2;
}

function removeLastKitten() {
  var arr3 = kittens.slice(0,2);
  return arr3;
}

function removeFirstKitten() {
  var arr4 = kittens.slice(1,3);
  return arr4;
}
