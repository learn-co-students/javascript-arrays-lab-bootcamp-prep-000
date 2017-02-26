const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newKat = [...kittens, name];
  return newKat;
}

function prependKitten(name) {
  var prepKat = [name, ...kittens];
  return prepKat;
}

function removeLastKitten() {
  var noLastKat = kittens.slice(0, kittens.length - 1);
  return noLastKat;
}

function removeFirstKitten(){
  var noFirstKat = kittens.slice(1);
  return noFirstKat;
}
