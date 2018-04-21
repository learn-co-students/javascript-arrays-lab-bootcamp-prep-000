const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, 'Broom']
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return ['Arnold', ...kittens]
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
    return kittens.slice(0, kittens.length - 1)
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return kittens.slice(-2)
}
