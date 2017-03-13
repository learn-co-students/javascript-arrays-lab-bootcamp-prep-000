// Javascript array Practice

const app = "I don't do much."

// Destructively appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

// Destructively prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

// Destructively removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// Destructively removes the first kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// Appends a kitten to the kittens array while preserving original array
function appendKitten(name) {
  return [...kittens, name];
}

// Prepends a kitten to the kittens array while preserving original array
function prependKitten(name) {
  return [name, ...kittens];
}

// Removes the last kitten in the kittens array and returns a new array leaving
// the kittens array unchanged.
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

// Removes the first kitten from the kittens array and returns a new array,
// leaving the kittens array unchanged.
function removeFirstKitten() {
  return kittens.slice(1);
}
