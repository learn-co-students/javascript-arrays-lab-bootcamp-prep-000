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
  var newKittenArray = [...kittens, name];
  return newKittenArray
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  var newKittenArray = [name, ...kittens]
  return newKittenArray
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return kittens.slice(1)
}