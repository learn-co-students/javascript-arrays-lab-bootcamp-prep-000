const app = "I don't do much."
const kittens = []

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
  var tempArray = kittens;
  return [...tempArray, name];
}

function prependKitten(name) {
  var tempArray = kittens;
  return [name, ...tempArray];
}

function removeLastKitten() {
  var tempArray = kittens.slice(0, kittens.length - 1);
  return tempArray;
}

function removeFirstKitten() {
  var tempArray = kittens.slice(1);
  return tempArray;
}
