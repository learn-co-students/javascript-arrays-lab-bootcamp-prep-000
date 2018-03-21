const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
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

function appendKitten() {
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

function prependKitten() {
  var newKittens = ["Arnold", ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.shift();
  return newKittens;
}
