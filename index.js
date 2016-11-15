const app = "I don't do much.";

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
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var x = kittens.slice(0, kittens.length - 1);
  return x;
}

function removeFirstKitten() {
  var lessKittens = kittens.slice(1);
  return lessKittens;
}
