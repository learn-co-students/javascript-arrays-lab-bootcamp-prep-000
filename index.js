const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (item) {
  kittens.push(item);
  return kittens
}

function destructivelyPrependKitten (item) {
  kittens.unshift(item);
  return kittens
}


function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens
}


function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens
}


function appendKitten (item) {
  var kittens2 = [...kittens,item]
  return kittens2
}


function prependKitten (item) {
  var kittens2 = [item,...kittens]
  return kittens2
}


function removeLastKitten () {
  var kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}


function removeFirstKitten () {
  var kittens2 = kittens.slice(1)
  return kittens2
}