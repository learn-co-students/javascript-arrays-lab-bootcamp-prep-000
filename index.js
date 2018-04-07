const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
  var neww = [...kittens, name]
  return neww
}

function prependKitten(name) {
  var newarray = [name, ...kittens]
  return (newarray)
}

function removeLastKitten() {
  var last = kittens.slice(0, kittens.length - 1)
  return last
}

function removeFirstKitten() {
  var first = kittens.slice(1)
  return first
}
