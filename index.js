const app = "I don't do much."

var kittens = [`Milo`,`Otis`,`Garfield`];

function kittens(kittens) {
  return kittens;
}

function destructivelyAppendKitten() {
  kittens.push(`Ralph`);
  return kittens;
}

kittens();

function destructivelyPrependKitten() {
  kittens.unshift(`Bob`);
  return kittens;
}

kittens();

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

kittens();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

kittens();

function appendKitten() {
  var newKittens = [...kittens, `Broom`];
  return newKittens;
}

kittens();

function prependKitten() {
  var newKittens = [`Arnold`, ...kittens];
  return newKittens;
}

kittens();

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

kittens();

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}

kittens();