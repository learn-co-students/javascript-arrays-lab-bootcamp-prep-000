var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  [kittens, "Broom"];
}

function prependKitten(name) {
  ["Arnold", kittens];
}

function removeLastKitten() {
  kittens.slice(2);
}

function removeFirstKitten() {
  kittens.slice(1);
}

//define your array here

// Add your functions and code here
