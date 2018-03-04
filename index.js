const app = "I don't do much."

function destructivelyAppendKitten(felix) {
  kittens.push(felix);
  return kittens;
}

function destructivelyPrependKitten(felix) {
  kittens.unshift(felix);
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

function appendKitten(felix) {
  var newList = [...kittens,felix]
  return newList;
}

function prependKitten(felix) {
  var newList = [felix,...kittens]
  return newList;
}

function removeFirstKitten() {
  var newList = kittens.slice(1);
  return newList;
}

function removeLastKitten() {
  var newList = kittens.slice(0,kittens.length-1);
  return newList;
}