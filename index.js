// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

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
  const kittens1 = [...kittens, name];
  return kittens1;
}

function prependKitten(name) {
  const kittens1 = [name, ...kittens];
  return kittens1;
}

function removeLastKitten() {
  const kittens1 = kittens.slice(0,2);
  return kittens1;
}

function removeFirstKitten() {
  const kittens1 = kittens.slice(1);
  return kittens1;
}