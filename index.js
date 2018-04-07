var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
destructivelyAppendKitten("Coco")

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
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
  return [...kittens, name];
}
appendKitten("Broom");

function prependKitten(name) {
  return [name, ...kittens];
}
prependKitten("Miki");

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}
removeLastKitten();

function removeFirstKitten() {
  return kittens.slice(1);
}
removeFirstKitten();
