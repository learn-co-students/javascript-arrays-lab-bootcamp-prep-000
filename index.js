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
  var kittenss = [...kittens, name]
  return kittenss
}

function prependKitten(name) {
  var kittenss = [name, ...kittens]
  return kittenss
}

function removeLastKitten() {
  var len = kittens.length
  var kittenss = kittens.slice(0, len - 1)
  return kittenss
}

function removeFirstKitten() {
  var kittenss = kittens.slice(1)
  return kittenss
}
