var kittens = [] //define your array here

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
  var newLastKittens = [...kittens, name];
  return newLastKittens;
}

function prependKitten(name) {
  var newFirstKittens = [name, ...kittens];
  return newFirstKittens;
}

function removeLastKitten() {
  var newLessLastKittens = kittens.slice(0, kittens.length - 1);
  return newLessLastKittens
}

function removeFirstKitten() {
  var newLessFirstKittnes = kittens.slice(1);
  return newLessFirstKittnes;
}