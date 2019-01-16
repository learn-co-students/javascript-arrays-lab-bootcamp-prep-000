var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a) {
  return kittens.push(a);
}

function destructivelyPrependKitten(a) {
  return kittens.unshift(a);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(a) {
  return [...kittens, a];
}

function prependKitten(a) {
  return [a, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0,2);
}

function removeFirstKitten() {
  return kittens.slice(1);
}