const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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
  var kitten = [...kittens, name]
  return kitten
}

function prependKitten(name) {
  let kitten = [name, ...kittens]
  return kitten
}

function removeLastKitten() {
  let kitten = kittens.slice(0, kittens.length - 1)
  return kitten
}

function removeFirstKitten() {
  let kitten = kittens.slice(1)
  return kitten
}
