// const app = "I don't do much."
// const kittens = ["Milo", "Otis", "Garfield"];
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};
destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
destructivelyRemoveFirstKitten();

function appendKitten(name) {
  newArray = [...kittens, name];
  return newArray;
}
appendKitten("Broom");

function prependKitten(name) {
  newArray = [name, ...kittens];
  return newArray;
}
prependKitten("Arnold");

function removeLastKitten() {
  newArray = kittens.slice(-2);
  return newArray;
}
removeLastKitten();

function removeFirstKitten() {
  newArray = kittens.slice(1);
  return newArray;
}
removeFirstKitten();
