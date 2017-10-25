var kittens = ["Milo", "Otis", "Garfield"];

// appends a kitten to the end of the kitten array (mutate)
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// prepends a kitten to the beginning of the kittens array (mutate)
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// removes the last kitten from the kittens array (mutate)
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// removes the first kitten from the kittens array (mutate)
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// appends a kitten array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  return [...kittens, name];
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  return [name, ...kittens];
}

// removes the last kitten in the kittens array and returns a new array, leaving the array unchanged
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

// removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  return kittens.slice(1);
}
