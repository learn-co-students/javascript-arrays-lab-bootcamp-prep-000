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
  var kitten2 = [...kittens, name]
  return kitten2
}

function prependKitten(name) {
  var kitten2 = [name, ...kittens]
  return kitten2
}

function removeLastKitten() {
  var kitten2 = kittens.slice(0, kittens.length - 1)
  return kitten2
}

function removeFirstKitten() {
  var kitten2 = kittens.slice(1)
  return kitten2
}
