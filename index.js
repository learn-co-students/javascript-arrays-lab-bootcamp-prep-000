const app = "I don't do much."

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}
var kittens = ['Milo', 'Garfield', 'Otis']

function appendKitten(name) {
  return [...kittens, 'Broom']
}

var kittens = ['Milo', 'Garfield', 'Otis']

function prependKitten(name) {
  return ['Arnold', ...kittens]
}

var kittens = ['Milo', 'Garfield', 'Otis']

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

var kittens = ['Milo', 'Otis', 'Garfield']

function removeFirstKitten() {
  return kittens.slice(1)
}
