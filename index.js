var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var new_kittens = [...kittens, name];
  return new_kittens;
}

function prependKitten(name) {
  var new_kittens = [name, ...kittens];
  return new_kittens;
}

function removeLastKitten() {
  var new_kittens = kittens.slice(0, kittens.length - 1);
  return new_kittens;
}

function removeFirstKitten() {
  var new_kittens = kittens.slice(1, kittens.length);
  return new_kittens;
}