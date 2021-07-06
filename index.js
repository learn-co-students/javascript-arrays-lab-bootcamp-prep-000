var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeFirstKitten() {
  return kittens.slice(1);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
} 

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
