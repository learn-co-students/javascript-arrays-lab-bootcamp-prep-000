var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name) {
  var newKitten = [name, ...kittens];
  return newKitten;
}

var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten() {
  var newKitten = kittens.slice(0, kittens.length -1);
  return newKitten;
}

var kittens = ["Milo", "Otis", "Garfield"];
function removeFirstKitten() {
  var newKitten = kittens.slice(1);
  return newKitten;
}

