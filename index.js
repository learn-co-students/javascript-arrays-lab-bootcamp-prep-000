const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten() {
  kittens.push("Ralph");
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
  var appended = [...kittens, name]
  return appended;
}

function prependKitten(name) {
  var prepended = [name, ...kittens]
  return prepended;
}

function removeLastKitten() {
  var removedLK = kittens.slice(0, kittens.length - 1);
  return removedLK;
}

function removeFirstKitten() {
  var removedFK = kittens.slice(1);
  return removedFK;
}
