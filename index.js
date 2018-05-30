const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

destructivelyPrependKitten('Bob');

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

destructivelyRemoveFirstKitten();

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

appendKitten("Broom");

function prependKitten(name) {
  var newKittens = [name,...kittens];
  return newKittens;
}

prependKitten('Arnold');

function removeLastKitten() {
  var newKittens = kittens.slice(0,kittens.length-1);
  return newKittens;
}

removeLastKitten();

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens
}

removeFirstKitten();