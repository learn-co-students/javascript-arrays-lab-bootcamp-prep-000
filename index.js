var kittens = [ "Milo", "Otis", "Garfield" ] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kitten;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kitten;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(3);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(kitten) {
  return [...kittens, kitten];
}

function prependKitten(name) {
  return [ name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}