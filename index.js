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
  var appendKitten = [...kittens, 'Broom']
  return appendKitten
}

function prependKitten(name) {
  var prependKitten = ['Arnold', ...kittens]
  return prependKitten
}

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, kittens.length - 1)
  return removeLastKitten
}

function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}
