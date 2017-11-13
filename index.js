const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

// destructivelyAppendKitten
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

// destructivelyPrependKitten
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

// destructivelyRemoveLastKitten
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

// destructivelyRemoveFirstKitten
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

// appendKitten
function appendKitten(name) {
  return [...kittens, name]
}

// prependKitten
function prependKitten(name) {
  return [name, ...kittens]
}

// removeLastKitten
function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}

// removeFirstKitten
function removeFirstKitten(name) {
  return kittens.slice(1)
}
