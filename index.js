const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var evenMoreKittens = [name, ...kittens];
  return evenMoreKittens;
}

function removeLastKitten() {
  var slicedArray = kittens.slice(0, kittens.length - 1)
  return slicedArray
}

function removeFirstKitten() {
  var anotherSlicedArray = kittens.slice(1)
  return anotherSlicedArray
}
