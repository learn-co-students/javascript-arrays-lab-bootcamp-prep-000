const app = "I don't do much."
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
  kittens.splice(kittens.length - 1, 1);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
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
  newArr.splice(newArr.length - 1, 1);
  return newArr;
}

function removeFirstKitten() {
  var newArr = [...kittens];
  newArr.shift();
  return newArr;
}
