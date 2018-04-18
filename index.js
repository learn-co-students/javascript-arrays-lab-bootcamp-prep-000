const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

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
  var b = [...kittens, name]
  return b
}

function prependKitten(name) {
  var b = [name, ...kittens]
  return b
}

function removeLastKitten() {
  var b = kittens.slice(0,-1)
  return b
}

function removeFirstKitten() {
  var b = kittens.slice(1)
  return b
}