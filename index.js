const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var newKittens = [...kittens,name]
  return newKittens
}

function prependKitten(name) {
  var newKittens2 = [name, ...kittens]
  return newKittens2
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
