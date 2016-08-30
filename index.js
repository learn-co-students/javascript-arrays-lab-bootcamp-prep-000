const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  return kittens.push(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1, kittens.length)
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(element) {
  var newArray = [...kittens, element]
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(element) {
  var newArray = [element, ...kittens]
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length -1)
  return newArray
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}
