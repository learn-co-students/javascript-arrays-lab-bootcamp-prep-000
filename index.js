const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph);
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
}

function prependKitten(Arnold) {
  var kittens3 = ["Arnold", ...kittens];
  return kittens3;
}

function removeLastKitten() {
  var kittens4 = kittens.slice(0, kittens.length -1);
  return kittens4;
}

function removeFirstKitten() {
  var kittens5 = kittens.slice(1, kittens.length +1);
  return kittens5;
}
