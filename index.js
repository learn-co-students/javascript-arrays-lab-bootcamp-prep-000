const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArray;
  newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  var newArray;
  newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  var newArray;
  newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  var newArray;
  newArray = kittens.slice(1);
  return newArray;
}
