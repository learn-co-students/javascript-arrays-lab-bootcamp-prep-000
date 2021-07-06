var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  var Nas = kittens.slice(0,2);
  return Nas;
}

function removeFirstKitten() {
  var Jay = kittens.slice(1,3);
  return Jay;
}