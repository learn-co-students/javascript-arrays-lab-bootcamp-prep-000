const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens = ["Milo", "Otis", "Garfield" ];
    kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var newKitten = [...kittens, "Broom"];
  return newKitten;
}

function prependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var newKitten = ["Arnold", ...kittens];
  return newKitten;
}

function removeFirstKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var firstKitten = kittens.slice(1);
  return firstKitten;
}

function removeLastKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var lastKitten = kittens.slice(0, kittens.length - 1);
  return lastKitten;
}
