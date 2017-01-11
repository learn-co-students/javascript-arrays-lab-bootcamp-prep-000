const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]
var newArray = kittens;

function appendKitten(name) {
  newArray.push(name);
  return newArray;
}
var kittens = ["Milo", "Otis", "Garfield"]
var newprependArray = kittens;

function prependKitten(name) {
  newprependArray.unshift(name);
  return newprependArray;
}

var kittens = ["Milo", "Otis", "Garfield"]
var newremoveArray = kittens;

function removeLastKitten(name) {
  newremoveArray.pop(name);
  return newremoveArray;
}

var kittens = ["Milo", "Otis", "Garfield"]
var removeArray = kittens;

function removeFirstKitten(name) {
  removeArray.shift(name);
  return removeArray;
}
