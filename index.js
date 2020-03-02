var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(n){
  return kittens.push(n)
}

function destructivelyPrependKitten(n) {
  return kittens.unshift(n);
}

function destructivelyRemoveLastKitten(n) {
  return kittens.pop(n);
}

function destructivelyRemoveFirstKitten(n) {
  return kittens.shift(n);
}

function appendKitten(n) {
  return [...kittens, n];
}

function prependKitten(n) {
  return [n, ...kittens];
}

function removeLastKitten(n) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(n) {
  return kittens.slice(1);
}
