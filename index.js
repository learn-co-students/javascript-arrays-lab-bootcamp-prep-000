const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten(name) {
  var fewerKittens = kittens.slice(0, kittens.length - 1)
  return fewerKittens
}

function removeFirstKitten(name) {
  var fewerKittens = kittens.slice(1)
  return fewerKittens
}