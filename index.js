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

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  //var temp = [name, ...kittens];
  //return temp;
  return [name, ...kittens];
}

function removeLastKitten() {
  var temp = kittens.slice(0, kittens.length - 1);
  return temp;
}

function removeFirstKitten() {
  var temp = kittens.slice(1, kittens.length);
  return temp;
}