const app = "I don't do much."

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
  return [...kittens, name]
}

function prependKitten() {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, length.kittens - 1)

}

function removeFirstKitten() {
  var kittens1 = kittens
  kittens1.slice()
  return kittens1
}
