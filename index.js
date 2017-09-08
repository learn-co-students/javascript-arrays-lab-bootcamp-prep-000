const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
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
  var slicedKittens = kittens.slice(0, -1)
  return slicedKittens;
}

function removeFirstKitten() {
  var slicedKittens = kittens.slice(1);
  return slicedKittens;
}
