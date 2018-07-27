// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function prependKitten(name) {
  return [name, ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}