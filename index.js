// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) { 
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.splice(0,0,"Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.splice(2,1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.splice(0,1);
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
  var lastKitten = ["Milo", "Otis"];
  return lastKitten;
}

function removeFirstKitten() {
  var firstKitten = ["Otis", "Garfield"];
  return firstKitten;
}
