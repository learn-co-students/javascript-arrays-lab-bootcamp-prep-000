const app = "I don't do much."
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
  var toReturn = kittens.slice();
  toReturn.push(name);
  return toReturn;
}

function prependKitten(name) {
  var toReturn = kittens.slice();
  toReturn.unshift(name);
  return toReturn;
}

function removeLastKitten() {
  var toReturn = kittens.slice();
  toReturn.pop();
  return toReturn;
}

function removeFirstKitten() {
  var toReturn = kittens.slice();
  toReturn.shift();
  return toReturn;
}
