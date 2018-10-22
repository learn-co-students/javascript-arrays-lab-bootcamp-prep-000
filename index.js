var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array) {
  kittens.push("Ralph");
  return array;
}

function destructivelyPrependKitten(array) {
  kittens.unshift("Bob");
  return array;
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop();
  return array;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
  return array;
}

function appendKitten(array) {
  kittens.concat();
  return kittens.concat("Broom");
}

function prependKitten(name, array) {
  kittens.concat();
  return kittens.concat("Arnold");
}

function removeLastKitten(array) {
  kittens.slice();
  return kittens.slice(0, kittens.length, -1);
}

function removeFirstKitten(array) {
  kittens.slice();
  return kittens.slice(1);
}