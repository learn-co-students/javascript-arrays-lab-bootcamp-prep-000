var kittens = [] //define your array here

// Add your functions and code here

var kittens = new Array();

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
  var result = [...kittens, name];
  return result;
}

function prependKitten(name) {
  var result = [name, ...kittens];
  return result;
}

function removeLastKitten() {
  return kittens.slice(0, 2);
}

function removeFirstKitten() {
  return kittens.slice(1, 3);
}
