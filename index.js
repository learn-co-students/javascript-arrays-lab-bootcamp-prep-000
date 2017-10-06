const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
