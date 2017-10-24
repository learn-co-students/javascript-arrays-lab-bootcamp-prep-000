const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten)
  return kittens
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
  return kittens
}

function appendKitten(kitten) {
  return [...kittens,kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function removeLastKitten(kitten) {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(kitten) {
  return kittens.slice(1)
}
