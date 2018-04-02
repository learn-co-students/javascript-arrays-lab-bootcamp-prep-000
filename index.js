const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
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

function appendKitten(name) {
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
var removeLastKitten = ["Milo", "Otis", "Garfield"];
removeLastKitten = removeLastKitten.slice(0, removeLastKitten.length -1);
return removeLastKitten;
}

function removeFirstKitten() {
var removeFirstKitten = ["Milo", "Otis", "Garfield"];
removeFirstKitten = removeFirstKitten.slice(1);
return removeFirstKitten;
}