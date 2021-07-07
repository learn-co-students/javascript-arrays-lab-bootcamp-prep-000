var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push("Ralph");
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten() {
  var appendKitten = [...kittens, "Broom"];
  return appendKitten;
}

function prependKitten() {
  var prependKitten = ["Arnold", ...kittens];
  return prependKitten;
}

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, kittens.length-1);
  return removeLastKitten;
}

function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
}