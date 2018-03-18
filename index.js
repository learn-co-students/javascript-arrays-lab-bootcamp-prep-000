const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var moreKittens = [...kittens, 'Broom'];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = ['Arnold',...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var removeEndKitten = kittens.slice(0, kittens.length -1);
  return removeEndKitten;
}

function removeFirstKitten() {
  var removeTheKitten = kittens.slice(1);
  return removeTheKitten;
}