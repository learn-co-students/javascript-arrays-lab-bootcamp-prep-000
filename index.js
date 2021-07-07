var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

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
  var newArr = kittens.slice(0);
  newArr.push(name);
  return newArr;
}

function prependKitten(name) {
  var newArr = kittens.slice(0);
  newArr.unshift(name);
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0);
  newArr.pop();
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(0);
  newArr.shift();
  return newArr;
}
