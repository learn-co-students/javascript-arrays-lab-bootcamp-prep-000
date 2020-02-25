var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
    return kittens;
  }

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
 var newArray = kittens.slice(0);
  newArray.push(name);
  return newArray;
  return kittens;
}

function prependKitten(name) {
  var newArray = kittens.slice(0);
  newArray.unshift(name);
  return newArray;
  return kittens;
}

function removeLastKitten (name) {
  var newArray = kittens.slice();
  newArray.pop();
  return newArray;
  return kittens;
}

function removeFirstKitten(name) {
  var newArray = kittens.slice();
  newArray.shift();
  return newArray;
  return kittens;
}