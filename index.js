const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(element) {
  kittens.push(element);
  // windows.kittens.push(element);
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element);
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element);
}
function appendKitten(element) {
  var newArray = [...kittens];
  // var newArray = kittens;
  newArray.push(element);
  return newArray;
}

function prependKitten(element) {
  var newArray = [...kittens];
  newArray.unshift(element);
  return newArray;
}

function removeLastKitten(element) {
  var newArray = [...kittens];
  newArray.pop(element);
  return newArray;
}

function removeFirstKitten(element) {
  var newArray = [...kittens];
  newArray.shift(element);
  return newArray;
}
