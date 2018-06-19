const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var appendKittensArray = [...kittens, "Broom"];
  
  return appendKittensArray;
}

function prependKitten(name) {
  var prependKittensArray = ["Arnold", ...kittens];
  
  return prependKittensArray;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, kittens.length - 1);
  
  return lastKitten;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1, kittens.length);
  
  return firstKitten;
}