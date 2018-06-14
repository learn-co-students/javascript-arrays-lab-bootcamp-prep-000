const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop("Garfield");
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift("Milo");
  return kittens;
}

function appendKitten(kittens) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens = [...kittens, "Broom"];
  return kittens
}

function prependKitten(kittens) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens = ["Arnold", ...kittens];
  return kittens
}

function removeLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(kittens) {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.slice(1)
}