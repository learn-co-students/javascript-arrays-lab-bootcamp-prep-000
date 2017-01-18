const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

// Append kittens destructively
function destructivelyAppendKitten() {
  kittens.push("Ralph");
}

// Prepend kittens destructively
function destructivelyPrependKitten() {
  kittens.unshift("Bob");
}

//Remove last kitten destructively
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

//Remove first kitten destructively
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten() {
var kittens = ["Milo", "Otis", "Garfield"];
var moreKittens = [...kittens, "Broom"];
  return moreKittens;
}

function prependKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  var moreKittens = ["Arnold", ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}

function removeFirstKitten() {
  var lessKittens = kittens.slice(1, kittens.length);
  return lessKittens;
}
