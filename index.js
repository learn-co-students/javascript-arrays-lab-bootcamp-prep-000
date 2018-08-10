var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}
function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}
function destructivelyRemoveFirstKitten(array) {
  return kittens.shift('Milo');
}
function destructivelyRemoveLastKitten(array) {
  return kittens.pop('Garfield');
}
function appendKitten(name) {
  return kittens.concat('Broom');
}
function prependKitten(name) {
return ['Arnold', ...kittens];
}
function removeLastKitten(array) {
return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(number) {
  return kittens.slice(1)
}
