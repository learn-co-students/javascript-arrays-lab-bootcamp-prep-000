const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(argName) {
  kittens.push(argName)
}

function destructivelyPrependKitten(argName) {
  kittens.unshift(argName)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(argName) {
  return [...kittens, argName]
}

function prependKitten(argName) {
  return [argName, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
