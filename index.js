const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten (name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten (name) {
  appendKitten=[...kittens, 'Broom']
  return appendKitten
}

function prependKitten (name) {
  prependKitten=['Arnold', ...kittens]
  return prependKitten
}

function removeLastKitten(){
  removeLastKitten=kittens.slice(0, kittens.length -1)
  return removeLastKitten
}

function removeFirstKitten(){
  removeFirstKitten=kittens.slice(1)
  return removeFirstKitten
}
