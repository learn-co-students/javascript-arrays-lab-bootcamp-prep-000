const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var name = "Broom"

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

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, 'Broom']
}

function prependKitten(name) {
  return ['Arnold', ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
