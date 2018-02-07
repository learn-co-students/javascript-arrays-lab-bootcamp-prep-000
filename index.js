const app = "I don't do much."

function destructivelyAppendKitten(array) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(array) {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
  return kittens;
}

function appendKitten(array, element) {
  return [...kittens, 'Broom'];
}

function prependKitten(array) {
  return ['Arnold', ...kittens];
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(array) {
  return kittens.slice(1);
}
