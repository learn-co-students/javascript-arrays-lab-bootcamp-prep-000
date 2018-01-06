var kittens = ["Milo", "Otis", "Garfield"];

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
  var noalt = [...kittens, name];
  return noalt;
}

function prependKitten(name) {
  var noalt = [name, ...kittens];
  return noalt;
}

function removeLastKitten() {
  var noalt = kittens.slice(0, kittens.length - 1);
  return noalt;
}

function removeFirstKitten() {
  var noalt = kittens.slice(1);
  return noalt;
}