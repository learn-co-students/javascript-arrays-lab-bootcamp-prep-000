const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten(name) {
  kittens = kittens.slice(1)
  return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
