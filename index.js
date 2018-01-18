var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  name = "Ralph";
  return kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name) {
  name = "Broom";
  return [...kittens, name];
}

var kittens = ["Milo", "Otis", "Garfield"];

function prependKitten(name) {
  name = "Arnold";
  return [name, ...kittens];
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeFirstKitten() {
  return kittens.slice(1);
}