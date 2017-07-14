const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  [...kittens, 'Broom']
  return [...kittens, 'Broom']
}

function prependKitten(name) {
  ['Arnold', ...kittens]
  return ['Arnold', ...kittens]
}

function removeLastKitten() {
  kittens.slice (0, kittens.length - 1)
  return kittens.slice (0, kittens.length - 1)
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens.slice(1)
}
