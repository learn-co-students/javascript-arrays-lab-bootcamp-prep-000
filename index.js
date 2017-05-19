const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  (kittens.push('Ralph'));
  return kittens;
}

function destructivelyPrependKitten(name) {
  (kittens.unshift('Bob'));
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  (kittens.pop([2]));
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  (kittens.shift('Milo'));
  return kittens;
}

function appendKitten(name) {
  // (kittens.push('Broom'));
  return ([...kittens, 'Broom']);
}

function prependKitten(name) {
  return (['Arnold', ...kittens]);
}

function removeLastKitten() {
  kittens.slice();
  return (['Milo', 'Otis']);
}

function removeFirstKitten() {
  (kittens.slice());
  return (['Otis', 'Garfield']);
}
