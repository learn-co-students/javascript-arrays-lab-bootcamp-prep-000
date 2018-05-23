const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return window.kittens;
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name);
  return window.kittens;
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
  return window.kittens;
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
  return window.kittens;
}

function appendKitten(name) {
  var copy = [...window.kittens];
  copy.push(name);
  return copy;
}

function prependKitten(name) {
  var copy = [...window.kittens];
  copy.unshift(name);
  return copy;
}

function removeLastKitten() {
  var copy = [...window.kittens];
  copy.pop();
  return copy;
}

function removeFirstKitten() {
  var copy = [...window.kittens];
  copy.shift();
  return copy;
}