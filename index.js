const app = "I don't do much."

function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var appendKitten = [...kittens, name]
  return appendKitten
}

function prependKitten(name) {
  var prependKitten = [name, ...kittens]
  return prependKitten
}

function removeLastKitten () {
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
