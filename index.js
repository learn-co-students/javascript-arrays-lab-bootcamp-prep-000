const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function Arrays() {
  kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  Arrays();
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  Arrays();
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  Arrays();
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  Arrays();
  kittens.shift();
}

function appendKitten(name) {
  Arrays();
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  // Arrays();
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  // Arrays();
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  // Arrays();
  var newArray = kittens.slice(1);
  return newArray;
}








