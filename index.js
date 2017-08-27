// const app = "I don't do much."
// const kittens = ["Milo", "Otis", "Garfield"];
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};
// destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
// destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
// destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
// destructivelyRemoveFirstKitten();

function appendKitten(name) {
  appendKitten = [...kittens, name];
  return appendKitten;
}
// appendKitten("Broom");

function prependKitten(name) {
  prependKitten = [name, ...kittens];
  return prependKitten;
}
// prependKitten("Arnold");

function removeLastKitten() {
  removeLastKitten = kittens.slice(0,2);
  return removeLastKitten;
}
// removeLastKitten();

function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
}
// removeFirstKitten();
