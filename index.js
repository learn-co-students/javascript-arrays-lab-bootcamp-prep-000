// define array
var kittens = ["Milo", "Otis", "Garfield"]; 

// Functions

function destructivelyAppendKitten(kittenElement) {
  kittens.push(kittenElement);
  return kittens;
}

function destructivelyPrependKitten(kittenElement) {
  kittens.unshift(kittenElement);
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

function appendKitten(kittenElement) {
  return [...kittens, kittenElement];
}

function prependKitten(kittenElement) {
  return [kittenElement, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
