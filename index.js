const app = "I don't do much.";
var kittens = ["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name) {
  var kittens2 = [name, ...kittens];
  return kittens2
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
