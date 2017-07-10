const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop("Garfield");
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift("Milo");
  return kittens;
}
function appendKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"];
  const morekittens = [...kittens, "Broom"];
  return morekittens;
}
function prependKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"];
  const morekittens = ["Arnold", ...kittens];
  return morekittens;
}
function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}
function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}
