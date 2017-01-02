// Run learn test
// Vocalise errors
// Write code
// Repeat
// Submit
const app = "I don't do much."

// Define kittens function.
// Initialise and define kittens array.
function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}

// Define function - ADD a kitten to the END of the array.
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Define function - ADD a kitten to the BEGINNING of the array.
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// Define function - REMOVE last kitten from array.
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// Define function - REMOVE first kitten from array.
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// Define function - ADD kitten to BEGINNING of new kittens array (kittens
// does not change).
function appendKitten(name) {
  return [...kittens, name];
}

// Define function - ADD kitten to END of new kittens array (kittens
// does not change).
function prependKitten(name) {
  return [name, ...kittens];
}

// Define function - REMOVE kitten from END of kittens array (kittens
// does not change).
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

// Define function - REMOVE kitten from BEGINNING of kittens array (kittens
// does not change).
function removeFirstKitten() {
  return kittens.slice(1);
}
