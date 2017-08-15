const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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

function appendKitten(name) {
  var c = [...kittens, name];
  return c;
}

function prependKitten(name) {
  var c = [name, ...kittens];
  return c;
}

function removeFirstKitten() {
  var c = kittens.slice(1);
  return c;
}

function removeLastKitten() {
  var c = kittens.slice(0, kittens.length -1);
  return c;
}
