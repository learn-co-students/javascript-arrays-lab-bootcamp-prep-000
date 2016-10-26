const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function prependKitten(name) {
  return [name, ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
