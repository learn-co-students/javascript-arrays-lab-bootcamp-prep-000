const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop(1);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
}

function appendKitten(name) {
  let newKittens = kittens.slice();
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  let newKittens = kittens.slice();
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  let newKittens = kittens.slice();
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  let newKittens = kittens.slice();
  newKittens.shift();
  return newKittens;
}