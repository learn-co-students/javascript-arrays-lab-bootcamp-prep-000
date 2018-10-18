var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = [...kittens];
  newArray.push(name);
  return newArray
}

function prependKitten(name) {
  var newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(name) {
  var newArray = [...kittens];
  newArray.pop();
  return newArray;
}

function removeFirstKitten(name) {
  var newArray = [...kittens];
  newArray.shift();
  return newArray;
}