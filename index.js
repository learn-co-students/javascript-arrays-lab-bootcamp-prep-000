const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop(Garfield);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(Milo) {
  kittens.shift(Milo);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(Broom) {
  var morekittens = [...kittens, Broom];
  return morekittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function prependKitten(Arnold) {
  var morekittens = [Arnold, ...kittens];
  return morekittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten(Garfield) {
  return kittens.slice(0, kittens.length - 1);
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeFirstKitten(Milo) {
  return kittens.slice(1);
}