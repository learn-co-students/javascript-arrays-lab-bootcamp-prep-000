// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
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

function appendKitten(name) {
  var moreKittens = [...kittens];
  moreKittens.splice(3, 0, 'Broom');
  return moreKittens;
}

function prependKitten(name) {
  var masGatos = ["Arnold", ...kittens];
  return masGatos;
}

function removeLastKitten() {
  var lonelyKitties = [...kittens];
  lonelyKitties.pop();
  return lonelyKitties;
}

function removeFirstKitten() {
  var byeKitty = [...kittens];
  byeKitty.shift();
  return byeKitty;
}
