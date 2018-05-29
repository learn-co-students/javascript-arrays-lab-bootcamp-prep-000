const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var name = 'Ralph'
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  var name = 'Bob'
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
  var name = 'Broom'
  return [...kittens, name]
}

function prependKitten(name) {
  var name = 'Arnold'
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
