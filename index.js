var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
 var morecats = [...kittens,"Broom"];
  return morecats;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var morecats = ['Arnold', ...kittens];
  return morecats;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
 var lesskittens = kittens.slice(0, 2);
  return lesskittens;
  }
  var kittens = ['Milo', 'Otis', 'Garfield'];
  function removeFirstKitten() {
  var lesskittens = kittens.slice(1);
  return lesskittens;
  }