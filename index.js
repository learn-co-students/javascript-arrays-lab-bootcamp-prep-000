const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

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
  const a = [...kittens, name]
  return a
}

function prependKitten(name) {
  const a = [name, ...kittens]
  return a
}

function removeLastKitten() {
  const a = kittens.slice(0, kittens.length - 1)
  return a
}

function removeFirstKitten() {
  const a = kittens.slice(1)
  return a
}