var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var array = [...kittens, name];
  return array;
}

function prependKitten(name) {
  var array = [name, ...kittens];
  return array;
}

function removeLastKitten(array) {
  array = kittens.slice(0, kittens.length - 1);
  return array;
}
function removeFirstKitten(array) {
  array = kittens.slice(1);
  return array;
}

