var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
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
  kittens.shift(name)
}

function appendKitten(name) {
  let newKitten = kittens.concat(name);
  return newKitten;
}

function prependKitten(name) {
  let prepended = [name,...kittens];
  return prepended;
}

function removeLastKitten(name) {
  let lastKitty = kittens.slice(0, kittens.length -1);
  return lastKitty;
}

function removeFirstKitten(name) {
  let firstKitty = kittens.slice(1, kittens.length);
  return firstKitty;
}