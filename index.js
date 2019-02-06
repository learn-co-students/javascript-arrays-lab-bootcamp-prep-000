var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(k) {
  kittens.push(k);
  return kittens;
}

function destructivelyPrependKitten(k) {
  kittens.unshift(k);
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

function appendKitten(k) {
  return [...kittens, k];
}

function prependKitten(k) {
  return [k, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1, length.kittens);
}
