var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var arrays = [...kittens, name]
  return arrays
}

function prependKitten(name) {
  var arrays = [name, ...kittens]
  return arrays
}

function removeLastKitten() {
  var arrays = kittens.slice(0, kittens.length - 1)
  return arrays
}

function removeFirstKitten() {
  var arrays = kittens.slice(1)
  return arrays
}