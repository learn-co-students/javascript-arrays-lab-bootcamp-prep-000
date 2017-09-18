const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function kittens() {
  kittens;
}
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens;
}

function destructivelyPrependKitten(name) {
  var goodKittens = kittens.unshift(name);
  return goodKittens;
}

function destructivelyRemoveLastKitten() {
  var cuteKittens = kittens.pop();
  return cuteKittens;
}

function destructivelyRemoveFirstKitten() {
  var thoseKittens = kittens.shift();
  return thoseKittens;
}

function appendKitten(name) {
  name = [...kittens, name];
  return name;
}

function prependKitten(name){
  name = [name, ...kittens];
  return name;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0, kittens.length - 1);
  return  lastKitten;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1);
  return  firstKitten;
}
