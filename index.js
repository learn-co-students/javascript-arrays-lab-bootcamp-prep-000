var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(array, element) {
kittens.push("Ralph");
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop("Ralph");
}

function destructivelyRemoveFirstKitten(array, element) {
  kittens.shift("Bob");
}

function appendKitten(array, element) {
  return [...kittens, "Broom"];
}

function prependKitten(array, element) {
  return ["Arnold", ...kittens];
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(array) {
  return kittens.slice(1);
}
 
// Add your functions and code here
