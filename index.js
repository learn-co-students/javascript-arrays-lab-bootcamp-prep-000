const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var arr2 = kittens;
  arr2 = [...arr2, name];
  return arr2;
}

function prependKitten(name) {
  var arr2 = kittens;
  arr2 = [name, ...arr2];
  return arr2;
}

function removeLastKitten() {
  var arr2 = [...kittens];
  arr2.pop();
  return arr2;
}

function removeFirstKitten() {
  var arr2 = [...kittens];
  arr2.shift();
  return arr2;
}
