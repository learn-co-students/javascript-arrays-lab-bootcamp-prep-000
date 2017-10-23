const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var test = [...kittens, name]
  return test
}

function prependKitten(name) {
  var test = [name, ...kittens]
  return test
}

function removeLastKitten() {
  var test = kittens.slice(0, kittens.length - 1)
  return test
}

function removeFirstKitten() {
  var test = kittens.slice(1)
  return test
}
