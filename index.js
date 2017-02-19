const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(0);
}
function appendKitten(name) {
  var moreKittens = kittens;
  moreKittens = [...kittens, name];
  return moreKittens;
}
function prependKitten(name) {
  var moreKittens = kittens;
  moreKittens = [name, ...kittens];
  return moreKittens;
}
function removeLastKitten() {
  var lessKittens = kittens;
  lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}
function removeFirstKitten() {
  var lessKittens = kittens;
  lessKittens = kittens.slice(1);
  return lessKittens;
}
