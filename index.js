const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten() {
  kittens.push('Ralph');
  return kittens
}
destructivelyAppendKitten()
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens
}
destructivelyPrependKitten()
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}
destructivelyRemoveLastKitten()
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}
destructivelyRemoveFirstKitten()

function appendKitten() {
  const newKittens = [...kittens, 'Broom'];
  return newKittens
}
appendKitten()
function prependKitten() {
  const newerKittens = ['Arnold', ...kittens];
  return newerKittens
}
prependKitten()

function removeLastKitten() {
  var newestKittens = kittens.slice(0,kittens.length -1)
  return newestKittens
}
removeLastKitten()
function removeFirstKitten() {
  var finalKittens = kittens.slice(1, 3);
  return finalKittens
}
removeFirstKitten()
