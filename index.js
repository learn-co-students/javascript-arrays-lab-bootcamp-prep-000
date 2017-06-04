const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function prependKitten(name) {
  var newKittens =  [name, ...kittens]
  return newKittens
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
