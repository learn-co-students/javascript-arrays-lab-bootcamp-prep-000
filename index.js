const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  var newkittens = [...kittens, 'Broom']
  return newkittens
}

function prependKitten(name) {
  var newkittens = ['Arnold', ...kittens]
  return newkittens
}

function removeLastKitten() {

  var newkittens = kittens.slice(0,kittens.length - 1)
  return newkittens
}

function removeFirstKitten() {
  var newkittens = kittens.slice(1)
  return newkittens
}
