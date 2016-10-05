const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

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
  var newarray = kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newarray = [...kittens, name];
  return newarray;
}

function prependKitten(name) {
  var newarray = [name, ...kittens];
  return newarray;
}

function removeLastKitten() {
  return kittens.slice(0,-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
