const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  // effect the underlying array from the global array kittens
  // and return it.
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  // effect the underlying kittens array and remove
  // the last kitten
  // the returning array should only have Milo and Otis
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  // preserve the underlying array by creating a new array.
  // add a new kitten to the new array and return it.
  // Use spread operator here--> ...kittens
  var newlyAppendedkittensArray = [...kittens, name];
  return newlyAppendedkittensArray;
}

function prependKitten(name) {
  var newlyPrependedKittenArray = [name, ...kittens];
  return newlyPrependedKittenArray;
}

function removeLastKitten() {
  var removedLastKittenArray = kittens.slice(0, kittens.length - 1);
  return removedLastKittenArray;
}

function removeFirstKitten() {
  var removedFirstKittenArray = kittens.slice(1);
  return removedFirstKittenArray;
}
