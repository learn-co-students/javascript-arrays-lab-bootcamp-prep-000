var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
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
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

function prependKitten(name) {
  var a = ["Arnold", ...kittens];
  return a;
}

function removeLastKitten() {
  var b = kittens.slice (0, kittens.length - 1);
  return b;
}

function removeFirstKitten() {
  var c = kittens.slice(1);
  return c;
}
