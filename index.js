const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  // add an element to the end of kittens array

  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  // add an element to the beginning of kittens array

  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  // remove the last element from the kittens array

  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  //remove the first element from the kitten array

  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  // append a kitten to kittens array, then return new array. Kittens array should be unchanged

  return [...kittens, name];
}

function prependKitten(name) {
  // prepend an element to the kittens array. Kittens array should be returned unchanged.

  return [name, ...kittens]
}

function removeLastKitten(name){
  // remove the last element and return a new array. Kittens array should be unchanged

  return kittens.slice (0, kittens.length - 1);
}

function removeFirstKitten(name){
  // remove the first element and return new array. Kittens array should be unchanged

  return kittens.slice(1);
}
