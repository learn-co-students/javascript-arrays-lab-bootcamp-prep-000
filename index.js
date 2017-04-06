const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray;
}

function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray;
}
