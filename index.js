const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
