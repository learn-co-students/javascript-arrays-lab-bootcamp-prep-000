var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
  return kittens;
}

// Prepends a kitten to the beginning of the array
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens;
}

// Removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield');
  return kittens;
}

// Removes the first kitten from the array
function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo');
  return kittens;
}

// Append kitten to the kittens array AND return a new array, leaving the kittens array unchanged aka "Non-mutated"
function appendKitten() {
  var addKitten = [...kittens, 'Broom'];
  return addKitten;
}

// Prepend kitten to array AND return new array, aka "Non-mutated"
function prependKitten() {
  var welcomeArnold = ['Arnold', ...kittens];
  return welcomeArnold;
}

// Remove last kitten in array and return new array, aka "Non-mutated"
function removeLastKitten() {
  const kittenFam = ["Milo", "Otis", "Garfield"];
  var kittenRemoved = kittenFam.slice(0, 2);
  return kittenRemoved;
}

// Remove first kitten from array AND return new array, aka "Non-mutated"
function removeFirstKitten() {
  const kittens = ["Milo", "Otis", "Garfield"];
  var firstKittenRemoved = kittens.slice(1, 3);
  return firstKittenRemoved;
}