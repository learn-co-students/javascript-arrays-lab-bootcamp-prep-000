const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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
  var newKittens = new Array();
  newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = new Array();
  newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = new Array();
  newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = new Array();
  newKittens = kittens.slice(1,kittens.length)
  return newKittens
}
