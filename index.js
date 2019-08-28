var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
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
  var appKittens = [...kittens, name];
  return appKittens;
}

function prependKitten(name) {
  var preKittens = [name, ...kittens];
  return preKittens;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, 2);
  return lastKitten;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1);
  return firstKitten;
}