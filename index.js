var kittens = [] //define your array here

// Add your functions and code here
const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(2);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0);
  return kittens;
}

function appendKitten(name) {
  var broom = ["Broom"];
  return kittens.concat(broom);
}

function prependKitten(name) {
  var arnold = ["Arnold"];
  return arnold.concat(kittens);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}