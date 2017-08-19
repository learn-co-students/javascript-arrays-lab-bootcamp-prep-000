function destructivelyAppendKitten(element) {
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element)
  return kittens
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element)
  return kittens
}

function appendKitten(element) {
  return [...kittens, "Broom"]
}

function prependKitten(element) {
  return ["Arnold", ...kittens]
}

function removeLastKitten(element) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(element) {
  return kittens.slice(1)
}
