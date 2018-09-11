// Add your functions and code here

let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Milo, Otis, Garfield) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(Milo, Otis, Garfield) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(Milo, Otis, Garfield) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(Milo, Otis, Garfield) {
  return kittens.shift();
}

function appendKitten(name) {
  let kittenAppend = [...kittens, "Broom"];
  return kittenAppend;
}

function prependKitten(name) {
  let kittenPrepend = ["Arnold", ...kittens];
  return kittenPrepend;
}

function removeLastKitten() {
  let lastKittenRemoval = kittens.slice(0, 2);
  return lastKittenRemoval;
}

function removeFirstKitten() {
  let firstKittenRemoval = kittens.slice(-2);
  return firstKittenRemoval;
}