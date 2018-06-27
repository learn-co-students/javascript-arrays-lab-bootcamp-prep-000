const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  return kittens.push("Ralph");
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten() {
  return kittens.unshift("Bob");
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten() {
  return [...kittens, "Broom"];
}
var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten() {
  return ["Arnold", ...kittens];
}
var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}
var kittens = ["Milo", "Otis", "Garfield"];
function removeFirstKitten() {
  return kittens.slice(1, kittens.length);
}
