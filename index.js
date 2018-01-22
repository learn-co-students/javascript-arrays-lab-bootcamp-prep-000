const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var evenMoreKittens = [name , ...kittens];
  return evenMoreKittens;
}

function removeLastKitten(name) {
  var lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}

function removeFirstKitten(name) {
  var evenLessKittens = kittens.slice(1);
  return evenLessKittens;
}