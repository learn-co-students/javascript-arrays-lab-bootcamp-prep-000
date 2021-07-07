var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  var Kittens1 = [...kittens]
  Kittens1.push(name);
  return Kittens1;
}
function prependKitten(name) {
  var Kittens2 = [...kittens];
  Kittens2.unshift(name);
  return Kittens2;
}
function removeLastKitten() {
  var Kittens3 = [...kittens];
  Kittens3.pop();
  return Kittens3;
}
function removeFirstKitten() {
  var Kittens4 = [...kittens];
  Kittens4.shift();
  return Kittens4;
}