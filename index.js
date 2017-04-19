const app = "I don't do much."

const kittens = [];

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
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(){
  var newArray = [...kittens]
  newArray.pop();
  return newArray
}

function removeFirstKitten() {
  var newArray = [...kittens]
  newArray.shift();
  return newArray
}
