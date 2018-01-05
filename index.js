
var kittens = ['Milo', 'Otis', 'Garfield']

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
  var newArr = [...kittens];
  newArr.push(name);
  return newArr;
}

function prependKitten(name) {
  var newArr = [...kittens];
  newArr.unshift(name);
  return newArr;
}

function removeLastKitten() {
  var newArr = [...kittens];
  newArr.pop();
  return newArr;
}

function removeFirstKitten() {
  var newArr = [...kittens];
  newArr.shift();
  return newArr;
}