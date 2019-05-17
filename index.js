var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
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
  var newKittens = [];
  newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = [];
  newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = [];
  newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = [];
  newKittens = kittens.slice(1);
  return newKittens;
}