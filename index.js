var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function prependKitten(name) {
  return [name, ...kittens];
}

function appendKitten(name) {
  return [...kittens, name];
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length -1);
}