var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

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
  var newLitter = Array.from(kittens);
  newLitter.push(name);
  return newLitter;
}

function prependKitten(name) {
  var newLitter = Array.from(kittens);
  newLitter.unshift(name);
  return newLitter;
}

function removeLastKitten(){
  var newLitter = Array.from(kittens);
  newLitter.pop(name);
  return newLitter;
}

function removeFirstKitten() {
  var newLitter = Array.from(kittens);
  newLitter.shift(name);
  return newLitter;
}

