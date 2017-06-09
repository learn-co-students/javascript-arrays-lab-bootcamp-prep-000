const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var newArrayAppend = [...kittens, name]
  return newArrayAppend
}

function prependKitten(name) {
  var newArrayPrepend = [name, ...kittens]
  return newArrayPrepend
}

function removeLastKitten() {
  var newArraySliceEnd = kittens.slice(0, kittens.length - 1)
  return newArraySliceEnd
}

function removeFirstKitten() {
  var newArraySliceBeginnig = kittens.slice(1)
  return newArraySliceBeginnig
}
