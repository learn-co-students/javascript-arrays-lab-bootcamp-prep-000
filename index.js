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

function destructivelyRemoveLastKitten() {
  kittens.pop(0, kittens.length - 1)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
