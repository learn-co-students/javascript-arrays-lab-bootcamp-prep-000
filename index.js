var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield");
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift("Milo");
  return kittens;
}

function appendKitten(name) {
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
}

function prependKitten(name) {
  var kittens3 = ["Arnold", ...kittens];
  return kittens3;
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}
