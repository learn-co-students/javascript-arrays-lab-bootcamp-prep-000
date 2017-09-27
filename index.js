const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var fineKittens = [...kittens];
  fineKittens.push(name)
  return fineKittens
}

function prependKitten(name) {
  var fineKittens = [...kittens];
  fineKittens.unshift(name)
  return fineKittens
}

function removeLastKitten(name) {
  var fineKittens = [...kittens];
  fineKittens.pop(name)
  return fineKittens
}

function removeFirstKitten(name) {
  var fineKittens = [...kittens];
  fineKittens.shift(name)
  return fineKittens
}
