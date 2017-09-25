const app = "I don't do much."

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
  // append a kitten to kittens array, then return new array.
  // kittens array should be unchanged

  return [kittens, ...];
}
