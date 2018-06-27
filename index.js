const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(addition) {
  kittens.push(addition);
  return kittens;
}

function destructivelyPrependKitten(addition) {
  kittens.unshift(addition);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(addition) {
  var newKittens = [...kittens, addition];
  return newKittens;
}

function prependKitten(addition) {
  var newKittens = [addition, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, length - 1);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}