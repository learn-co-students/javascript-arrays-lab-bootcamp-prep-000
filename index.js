var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens]
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}

function appendKitten(name) {
  var newKit = [...kittens, name]
  return newKit
}

function prependKitten(name) {
  var newKit = [name, ...kittens]
  return newKit
}

function removeLastKitten() {
  var newKit = kittens.slice(0, kittens.length - 1)
  return newKit
}

function removeFirstKitten() {
  var newKit = kittens.slice(1)
  return newKit
}