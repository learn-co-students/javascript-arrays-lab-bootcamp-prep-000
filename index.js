var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittenName = [...kittens, name]
  return kittenName;
}

function prependKitten(name) {
  var nameKitten = [name,...kittens];
  return nameKitten;
}

function removeFirstKitten() {
  var minKitten = kittens.slice(1);
  return minKitten;
}

function removeLastKitten() {
  var kittenMin = kittens.slice(0, kittens.length-1)
  return kittenMin;
}

