var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

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
  kittens.shift();
}

function appendKitten(name) {
  let newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  let newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
  let newKittens = kittens.slice(1);
  return newKittens;
}