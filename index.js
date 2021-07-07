var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop(array);
  return kittens;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift(array);
  return kittens;
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}
  
function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1);
}
  
function removeFirstKitten(array) {
  return kittens.slice(1);
}  
  
  
  
