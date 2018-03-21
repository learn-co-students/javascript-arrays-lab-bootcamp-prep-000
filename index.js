const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var addKittenArray = [...kittens, name];
  return addKittenArray;
}

function prependKitten(name) {
  var addKittenToBeginning = [name, ...kittens];
  return addKittenToBeginning;
}

function removeLastKitten() {
  var removeLast = kittens.slice(0, kittens.length - 1);
  return removeLast;
}

function removeFirstKitten() {
  var removeFirst = kittens.slice(1);
  return removeFirst;
}