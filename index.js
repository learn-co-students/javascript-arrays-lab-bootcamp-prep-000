const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  var anArray = kittens.slice(0, kittens.length -1)
  return anArray
}

function removeFirstKitten() {
  var bArray = kittens.slice(1);
  return bArray
}