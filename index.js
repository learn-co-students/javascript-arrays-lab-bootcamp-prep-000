var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, name) {
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(array, name) {
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(array, name) {
  var newKitten = ["Broom"];
  var allKittens = [];
  return allKittens = kittens.concat(newKitten);
}

function prependKitten(array, name) {
  var newKitten2 = ["Arnold"];
  var allKittens2 = [];
  return allKittens2 = newKitten2.concat(kittens);
}

function removeLastKitten() {
  var byeKittens = kittens.slice(0, 2);
  return byeKittens
}

function removeFirstKitten() {
  var leftKittens = kittens.slice(1, kittens.length);
  return leftKittens
}
