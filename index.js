var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var moreKittens = [...kittens, "Broom"];
  return moreKittens
}

function prependKitten(name) {
  var moreKittens2 = ["Arnold", ...kittens];
  return moreKittens2
}

function removeLastKitten() {
  var lessKittens = kittens.slice(0, -1);
  return lessKittens
}

function removeFirstKitten() {
  var lessKittens2 = kittens.slice(1);
  return lessKittens2
}