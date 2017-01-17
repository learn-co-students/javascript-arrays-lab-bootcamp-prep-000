const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten() {
  kittens.slice(0)
  return kittens
}

function removeLastKitten(name) {
  name = kittens.slice(0, kittens.length - 1)
  return name
}

function removeFirstKitten(name) {
  name = kittens.slice(1)
  return name
}
