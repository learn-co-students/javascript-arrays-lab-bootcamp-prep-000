const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten)
}

function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(newKitten) {
  return [...kittens, `${newKitten}`]
}

function prependKitten(newKitten) {
  return [`${newKitten}`, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
