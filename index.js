const app = "I don't do much."

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
  var otherKittens = [...kittens, name];
  return otherKittens;
}

function prependKitten(name) {
  var otherKittens = [name, ...kittens];
  return otherKittens;
}

function removeLastKitten () {
  var otherKittens = kittens.slice(0, kittens.length -1);
  return otherKittens;
}

function removeFirstKitten () {
  var otherKittens = kittens.slice(1);
  return otherKittens;
}
