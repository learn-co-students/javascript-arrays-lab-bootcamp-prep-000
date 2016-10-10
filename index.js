const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
var newArr = [...kittens, name];
return newArr;
}

function prependKitten(name) {
  var newArr = [name, ...kittens];
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
