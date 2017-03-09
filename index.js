const app = "I don't do much."
var kittens = [];
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
  var kitten = [...kittens, name];
  return kitten;
}

function prependKitten(name) {
  var kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten() {
  var kitten = kittens.slice(0, kittens.length-1);
  return kitten;
}

function removeFirstKitten() {
  var kitten = kittens.slice(1);
  return kitten;
}