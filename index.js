var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  return kittens.push(Ralph);
}

function destructivelyPrependKitten(George) {
  return kittens.unshift(George);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(Broom) {
  var kittens1 = [...kittens, `Broom`];
  return kittens1;
}

function prependKitten(Arnold) {
  var kittens2 = [Arnold,...kittens];
  return kittens2;
}

function removeLastKitten() {
  return kittens.slice(`0`, `2`);
}

function removeFirstKitten() {
  return kittens.slice(`1`);
}