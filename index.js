const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var name;
  kittens.push(name);
  return name;
}

function destructivelyPrependKitten(name) {
  var name;
  kittens.unshift(name);
  return name;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  var kittens1 = [...kittens,name];
  return kittens1;
}

function prependKitten(name) {
  var kittens1 = [name,...kittens];
  return kittens1;
}

function removeLastKitten() {
  var kitten1 = kittens.slice(0,2);
  return kitten1;
}

function removeFirstKitten() {
  var kitten1 = kittens.slice(1);
  return kitten1;
}
