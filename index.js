const app = "I don't do much."
function destructivelyAppendKitten(kittenString) {
  kittens.push(kittenString)
  return kittens
}

function destructivelyPrependKitten(kittenString) {
  kittens.unshift(kittenString)
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

function appendKitten(Broom) {
  return [...kittens, Broom]
}

function prependKitten(Broom) {
  return [Broom, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
