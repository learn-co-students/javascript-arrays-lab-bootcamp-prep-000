const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  var newArray = [...kittens, name]
  kittens === ["Milo", "Otis", "Garfield"]
  return newArray
}

kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  var newArray = [name, ...kittens]
  kittens === ["Milo", "Otis", "Garfield"]
  return newArray
}

kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
  kittens === ["Milo", "Otis", "Garfield"]
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return kittens.slice(1)
  kittens === ["Milo", "Otis", "Garfield"]
}