const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittenName) {
  kittens.push(kittenName);
  return kittens;
}

function destructivelyPrependKitten(kittenName) {
  kittens.unshift(kittenName);
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

function appendKitten(kittenName) {
  var kitties = [...kittens, kittenName];
  return kitties;
}

function prependKitten(kittenName) {
  var addKitty = [kittenName, ...kittens];
  return addKitty;
}

function removeLastKitten() {
  var noLastKitty = kittens.slice(0,2)
  return noLastKitty;
}

function removeFirstKitten() {
  var noFirstKitty = kittens.slice(1,3);
  return noFirstKitty;
}