const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(kitten) {
  var kittens2 = [kitten, ...kittens];
  return kittens2;
}
function appendKitten(kitten) {
  var kittens2 = [...kittens, kitten];
  return kittens2;
}
function removeFirstKitten() {
  var kittens2 = kittens.slice(1);
  return kittens2;
}
function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}


var kittens = ['Milo', 'Otis', 'Garfield'];
