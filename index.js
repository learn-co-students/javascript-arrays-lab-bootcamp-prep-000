const app = "I don't do much."
var kittens = []

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(kitten) {
  return [...kittens, kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}
