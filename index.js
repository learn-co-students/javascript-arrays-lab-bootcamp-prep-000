const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var array = [...kittens]
  array.push(name)
  return array
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
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

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function prependKitten(name) {
  var array = [...kittens]
  array.unshift(name)
  return array
}

function removeFirstKitten() {
  var array = [...kittens]
  array.shift()
  return array
}

function removeLastKitten() {
  let array = [...kittens]
  array.pop()
  return array
}
