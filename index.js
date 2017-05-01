var kittens = ["Milo", "Otis", "Garfield"];

var Ralph = "Ralph";

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph);

  return kittens;
}

function destructivelyPrependKitten(Ralph) {
  kittens.unshift(Ralph);

  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()

  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();

  return kittens;
}

var Broom = "Broom";

function appendKitten(Broom) {
  var newKittens = [...kittens, Broom];

  return newKittens;
}

var Arnold = "Arnold";

function prependKitten(name) {
  var extraKittens = [Arnold, ...kittens];

  return extraKittens;
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length -1);

  return lessKittens;
}

function removeFirstKitten() {
  var missingKitten = kittens.slice(1);

  return missingKitten;
}
