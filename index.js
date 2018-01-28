const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(cat) {
  return kittens.push(cat)
}

function destructivelyPrependKitten(cat) {
  return kittens.unshift(cat)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(cat) {
  return [...kittens, cat]
}

function prependKitten(cat) {
  return [cat, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
