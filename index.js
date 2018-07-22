// Add your functions and code here
kittens;

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}