const app = "I don't do much.";

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
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
  var kittensCopy = kittens.slice(0);
  kittensCopy.push(name);
  return kittensCopy;
}

function prependKitten(name) {
  var kittensCopy = kittens.slice(0);
  kittensCopy.unshift(name);
  return kittensCopy;
}

function removeLastKitten() {
  var kittensCopy = kittens.slice(0);
  kittensCopy.pop();
  return kittensCopy;
}

function removeFirstKitten() {
  var kittensCopy = kittens.slice(0);
  kittensCopy.shift();
  return kittensCopy;
}
