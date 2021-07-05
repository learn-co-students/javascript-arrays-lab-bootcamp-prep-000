var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}
destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
destructivelyPrependKitten('Bob');

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
destructivelyRemoveFirstKitten();

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}
appendKitten('Broom');

function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
}
prependKitten('Arnold');

function removeLastKitten() {
  var newArray = kittens.slice(0, 2);
  return newArray;
}
removeLastKitten();

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}
removeLastKitten();