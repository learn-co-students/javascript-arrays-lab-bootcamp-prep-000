const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
