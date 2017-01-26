const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(name) {
kittens.pop(name);
return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
kittens.shift(name);
return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
var newkittens = kittens;

function appendKitten(name) {
  newkittens.push(name);
  return newkittens
}

var kittens = ["Milo", "Otis", "Garfield"]
var newkittens1 = kittens;

function prependKitten(name) {
  newkittens1.unshift(name);
  return newkittens1
}

var kittens = ["Milo", "Otis", "Garfield"]
var newkittens2 = kittens;

function removeLastKitten(name) {
newkittens2.pop(name);
return newkittens2
}

var kittens = ["Milo", "Otis", "Garfield"]
var newkittens3 = kittens;

function removeFirstKitten(name) {
newkittens3.shift(name);
return newkittens3
}
